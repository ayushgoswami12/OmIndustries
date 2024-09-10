
import { useEffect } from "react";
import "./OurProducts.css"
function CustomCursor() {
    useEffect(() => {
        const cursor = document.querySelector(".custom-cursor");
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        const moveCursor = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        
            cursor.style.left = `${mouseX}px`;
            cursor.style.top = `${mouseY}px`;
        };

        const animateCursor = () => {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            cursor.style.left = `${cursorX}px`;
            cursor.style.top = `${cursorY}px`;
            requestAnimationFrame(animateCursor);
        };

        window.addEventListener("mousemove", moveCursor);
        animateCursor();

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);
  return (
    <div>
      <div className="custom-cursor fixed w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  )
}

export default CustomCursor
