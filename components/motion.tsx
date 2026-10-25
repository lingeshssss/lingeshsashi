"use client";
import { useEffect } from "react";
const selector = "[data-reveal], [data-reveal-stagger]";
// Marks scroll-reveal elements as revealed once they enter the viewport. Hidden
// states only apply while <html> has the `motion-ready` class (set by the head
// script, removed by its failsafe if this component never hydrates) and the
// visitor has not requested reduced motion, so content is never stranded.
export function MotionController() {
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.hydrated = "";
    if (!("IntersectionObserver" in window)) {
      root.classList.remove("motion-ready");
      return;
    }
    const intersection = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.revealed = "";
          intersection.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0 },
    );
    function observe(scope: ParentNode) {
      scope.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        if (!("revealed" in el.dataset)) intersection.observe(el);
      });
    }
    observe(document);
    // Client navigations and re-renders add new reveal targets.
    const mutations = new MutationObserver((records) => {
      for (const record of records)
        record.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.matches(selector) && !("revealed" in node.dataset))
            intersection.observe(node);
          observe(node);
        });
    });
    mutations.observe(document.body, { childList: true, subtree: true });
    // Pointer light on car drawings: an M-tricolor layer follows the cursor.
    const fine = matchMedia("(hover: hover) and (pointer: fine)");
    function onMove(e: PointerEvent) {
      if (!fine.matches) return;
      const el = (e.target as Element | null)?.closest?.<HTMLElement>(
        ".car-drawing",
      );
      document
        .querySelectorAll<HTMLElement>(".car-drawing[data-lit]")
        .forEach((lit) => {
          if (lit !== el) delete lit.dataset.lit;
        });
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
      el.dataset.lit = "";
    }
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      intersection.disconnect();
      mutations.disconnect();
      document.removeEventListener("pointermove", onMove);
    };
  }, []);
  return null;
}
