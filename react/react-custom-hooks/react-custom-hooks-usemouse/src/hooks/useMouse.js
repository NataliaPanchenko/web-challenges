import { useState, useEffect } from "react";

export default function useMouse() {
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);

  useEffect(() => {
    function handleMouse() {
      setPositionX(event.clientX);
      setPositionY(event.clientY);
    }
    handleMouse();
    document.addEventListener("mousemove", handleMouse);
  }, []);

  return [positionX, positionY];
}
