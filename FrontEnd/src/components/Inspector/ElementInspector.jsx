import React, { useEffect, useState } from "react";
import gsap from "gsap";

const ElementInspector = () => {
  const [info, setInfo] = useState({ tag: "", className: "", text: "" });

  useEffect(() => {
    const box = document.getElementById("inspectorBox");
    const xMove = gsap.quickTo(box, "x", { duration: 0.25, ease: "power3.out" });
    const yMove = gsap.quickTo(box, "y", { duration: 0.25, ease: "power3.out" });

    let lastUpdate = 0;

    const handleMove = (e) => {
      const now = Date.now();

      // 🔹  Update every 100ms only (to avoid crash)
      if (now - lastUpdate > 100) {
        const el = document.elementFromPoint(e.clientX, e.clientY);

        if (el && !box.contains(el)) {
          const tag = el.tagName?.toLowerCase() || "none";

          // ⚠️ Skip if element is link, image, svg (these cause white flash)
          if (!["a", "img", "svg", "path"].includes(tag)) {
            setInfo({
              tag,
              className: el.className || "none",
              text: el.innerText?.slice(0, 40) || "none",
            });
          }
        }
        lastUpdate = now;
      }

      // Keep some distance from cursor
      const offsetX = 50;
      const offsetY = 60;

      const newX =
        e.clientX + offsetX > window.innerWidth - 230
          ? e.clientX - 230
          : e.clientX + offsetX;

      const newY =
        e.clientY + offsetY > window.innerHeight - 120
          ? e.clientY - 120
          : e.clientY + offsetY;

      xMove(newX);
      yMove(newY);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      id="inspectorBox"
      className="fixed top-0 left-0 text-white text-xs p-3 rounded-lg pointer-events-none z-[9999] w-[220px] border border-purple-500 shadow-[0_0_10px_rgba(130,69,236,0.5)]"
      style={{
        transform: "translate(-50%, -50%)",
        background: "rgba(10,10,10,0.85)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      }}
    >
      <p>
        <span className="text-blue-400">Tag:</span> {info.tag}
      </p>
      <p>
        <span className="text-green-400">Class:</span> {info.className}
      </p>
      <p>
        <span className="text-yellow-400">Text:</span> {info.text}
      </p>
    </div>
  );
};

export default ElementInspector;
