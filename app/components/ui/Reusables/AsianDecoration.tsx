import { fade } from "@/utils/motionVariants";
import { MotionDiv } from "./Motions";

export default function AsianDecoration() {
  return (
    <MotionDiv
      variants={fade("top", "", 0.5)}
      initial="start"
      animate="stop"
      className="absolute bottom-5 left-0 flex flex-col pl-2 font-playfair text-7xl font-bold text-white/90"
    >
      <span>日</span>
      <span>本</span>
      <span>食</span>
    </MotionDiv>
  );
}
