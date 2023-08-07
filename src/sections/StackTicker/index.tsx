import { useEffect, useState } from "react";
import { Stacks } from "../../constants/stacks";

import { color, motion } from "framer-motion";

const StackTicker = ({ isLg }: { isLg: Boolean }) => {
  const animationStates = [{ x: -innerWidth }, { y: -innerHeight }];
  const [animation, setAnimation] = useState(animationStates[1]);

  useEffect(() => {
    if (isLg) {
      setAnimation(animationStates[1]);
    } else {
      setAnimation(animationStates[0]);
    }
  }, [isLg]);

  return (
    <motion.div
      key={animation.x}
      transition={{
        type: "tween",
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      }}
      whileHover={{
        scale: 1.2,
      }}
      initial={isLg ? { y: 0 } : { x: 0 }}
      animate={animation}
      className="flex items-center space-x-20 lg:flex-col lg:space-x-0"
    >
      {Stacks.map((stack) => (
        <div
          key={stack.id}
          className="flex flex-row items-center space-x-3 lg:my-10 lg:w-6 lg:flex-col lg:justify-center lg:space-x-0 lg:space-y-3"
        >
          <p className="lg:-rotate-180 lg:[writing-mode:vertical-rl]">
            {stack.name}
          </p>
          <img
            className="h-6 lg:-rotate-90"
            src={stack.image}
            alt={stack.name}
          />
        </div>
      ))}
    </motion.div>
  );
};
export default StackTicker;
