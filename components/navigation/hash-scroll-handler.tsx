"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HashScrollHandler() {
  useEffect(() => {
    function scrollToCurrentHash() {
      const hash = window.location.hash;

      if (!hash) return;

      const id = decodeURIComponent(hash.slice(1));
      const target = document.getElementById(id);

      if (!target) return;

      ScrollTrigger.refresh(true);

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          target.scrollIntoView({
            behavior: "auto",
            block: "start",
          });
        });
      });
    }

    const timeoutId = window.setTimeout(scrollToCurrentHash, 500);

    window.addEventListener("load", scrollToCurrentHash);
    window.addEventListener("hashchange", scrollToCurrentHash);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("load", scrollToCurrentHash);
      window.removeEventListener("hashchange", scrollToCurrentHash);
    };
  }, []);

  return null;
}