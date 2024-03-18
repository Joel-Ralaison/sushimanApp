import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { toggleScroll } from "./toggleScroll";

export function useScreenDetect() {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useEffect(() => {
    console.log(isMobile ? "Mobile navigation" : "Desktop navigation");
    if (!isMobile) toggleScroll("enabled");
  }, [isMobile]);

  return isMobile;
}
