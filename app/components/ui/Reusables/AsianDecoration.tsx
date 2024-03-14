import { MotionDiv } from "./Motions";

export default function AsianDecoration() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: "-25%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, type: "tween", duration: 0.5 }}
      className="absolute bottom-5 left-0 flex flex-col pl-2 font-playfair text-7xl font-bold text-white/90"
    >
      <span>日</span>
      <span>本</span>
      <span>食</span>
    </MotionDiv>
  );
}
