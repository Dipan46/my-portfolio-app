import React, { useEffect, useRef } from 'react';

function Cursor() {
  const circlesRef = useRef([]);
  const coords = useRef({ x: 0, y: 0 });

  const colors = [
      "#ffb56b", "#fdaf69", "#f89d63", "#f59761", "#ef865e", "#ec805d",
      "#e36e5c", "#df685c", "#d5585c", "#c5415d", "#c03b5d",
      "#b22c5e", "#ac265e", "#9c155f", "#950f5f", "#830060", "#7c0060",
      "#680060", "#60005f", "#48005f", "#3d005e"
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;

      circlesRef.current.forEach(circle => {
          if (circle) circle.style.display = 'block'; // Show custom cursor on mousemove
      });
    };

    const animateCircles = () => {
      let x = coords.current.x;
      let y = coords.current.y;

      circlesRef.current.forEach((circle, index) => {
        if (!circle) return;

        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        circle.style.scale = (circlesRef.current.length - index) / circlesRef.current.length;

        const nextCircle = circlesRef.current[index + 1] || circlesRef.current[0];
        x += (nextCircle.offsetLeft + 12 - x) * 0.4; // Adjusted for center
        y += (nextCircle.offsetTop + 12 - y) * 0.4; // Adjusted for center
      });

      requestAnimationFrame(animateCircles);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animateCircles();

    // Handle blur and focus to hide/show cursor
    const handleBlur = () => {
      circlesRef.current.forEach(circle => {
        if (circle) circle.style.display = 'none';
      });
    };
    const handleFocus = () => {
        circlesRef.current.forEach(circle => {
          if (circle) circle.style.display = 'block';
        });
      };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);


    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      {colors.map((color, index) => (
        <div
          key={index}
          ref={el => circlesRef.current[index] = el}
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </>
  );
}

export default Cursor;