"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/projects", "Projects"],
  ["/experience", "Experience"],
  ["/resume", "Résumé"],
  ["/contact", "Contact"],
];
function subscribeTheme(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  const query = matchMedia("(prefers-color-scheme: dark)");
  function systemChanged() {
    let manual = null;
    try {
      manual = localStorage.getItem("theme");
    } catch {}
    if (!manual)
      document.documentElement.dataset.theme = query.matches ? "dark" : "light";
  }
  query.addEventListener("change", systemChanged);
  return () => {
    observer.disconnect();
    query.removeEventListener("change", systemChanged);
  };
}
export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dark = useSyncExternalStore(
    subscribeTheme,
    () => document.documentElement.dataset.theme === "dark",
    () => false,
  );
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        document.querySelector<HTMLButtonElement>(".menu-toggle")?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  function toggleTheme() {
    const next = !dark;
    document.documentElement.dataset.theme = next ? "dark" : "light";
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }
  return (
    <header className="header">
      <div className="nav-wrap">
        <Link
          href="/"
          className="wordmark"
          aria-label="Lingesh Sashi Kumar home"
        >
          LSK<span>.</span>
        </Link>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav
          id="main-nav"
          aria-label="Main navigation"
          className={open ? "nav open" : "nav"}
        >
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              aria-current={
                (href === "/" ? pathname === "/" : pathname.startsWith(href))
                  ? "page"
                  : undefined
              }
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
        >
          <span aria-hidden="true">{dark ? "☀" : "◐"}</span>
        </button>
      </div>
    </header>
  );
}
