import { useState } from "react"

export const useScreenWidth = () => {
  const screenWidth = window.screen.width;
  const [width, setWidth] = useState<number>(screenWidth);
    window.addEventListener('resize', () => setWidth(window.screen.width));
  return width
}