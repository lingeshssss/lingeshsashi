"use client";
export function PrintButton() {
  return (
    <button
      className="button secondary print-control"
      onClick={() => window.print()}
    >
      Print this page <span aria-hidden="true">→</span>
    </button>
  );
}
