"use client";

import { useEffect } from "react";

/**
 * Next.js App Router soft navigation often lands at the top (or nowhere)
 * when the URL includes a hash. Re-apply scroll to the target once mounted
 * and on subsequent hash changes.
 */
export function HashScroll() {
  useEffect(() => {
    function scrollToHash() {
      const id = window.location.hash.replace(/^#/, "");
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      // Defer one frame so layout / sticky header offsets settle.
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return null;
}
