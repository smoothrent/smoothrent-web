"use client";
import React, { useEffect, useRef } from "react";

const CK_UID = "246e213b69";
const CK_SRC = "https://smooth-rent.kit.com/246e213b69/index.js";

const Waitlist = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Prevent duplicate injection
    const exists = document.querySelector(`script[data-uid="${CK_UID}"]`);
    if (exists) return;

    const s = document.createElement("script");
    s.async = true;
    s.src = CK_SRC;
    s.setAttribute("data-uid", CK_UID);
    containerRef.current.appendChild(s);
  }, []);

  return (
    <section className="max-w-2xl mx-auto px-4 md:py-16">
      <div ref={containerRef} className="md:mt-8" aria-live="polite" />

      <noscript>
        <a href={`https://smooth-rent.kit.com/${CK_UID}`}>Open the form</a>
      </noscript>
    </section>
  );
};

export default Waitlist;
