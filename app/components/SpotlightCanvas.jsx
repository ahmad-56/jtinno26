import { useEffect, useRef } from "react";

function SpotlightCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const resizeObserver = new ResizeObserver(setCanvasSize);
    resizeObserver.observe(document.body);

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY + window.scrollY;

      context.clearRect(0, 0, canvas.width, canvas.height);
      const gradient = context.createRadialGradient(x, y, 0, x, y, 200);
      gradient.addColorStop(0, "rgba(13, 118, 111, 0.22)");
      gradient.addColorStop(1, "rgba(12, 97, 119, 0)");
      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full pointer-events-none z-[49]"
      style={{ height: "100%" }}
    />
  );
}

export default SpotlightCanvas;
