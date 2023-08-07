import { useEffect, useState } from "react";
import { Stacks } from "../../constants/stacks";

import { motion } from "framer-motion";

const StackTicker = ({ isLg }: { isLg: Boolean }) => {
  const animationStates = [
    { x: -(Stacks.length * 192) },
    { y: -(Stacks.length * 192) },
  ];
  const [animation, setAnimation] = useState(animationStates[1]);

  useEffect(() => {
    if (isLg) {
      setAnimation(animationStates[1]);
    } else {
      setAnimation(animationStates[0]);
    }
  }, [isLg]);

  return (
    <div className="flex items-center lg:flex-col ">
      {[Stacks, Stacks].map((stack) => (
        <motion.div
          key={animation.x}
          transition={{
            type: "tween",
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
          whileHover={{
            scale: 1.2,
          }}
          initial={isLg ? { y: 0 } : { x: 0 }}
          animate={animation}
          className="flex items-center lg:flex-col lg:space-x-0"
        >
          {stack.map((item) => {
            return (
              <div
                key={item.id}
                className="flex h-6 w-40 flex-row items-center justify-center space-x-3 lg:h-48 lg:w-6 lg:flex-col lg:space-x-0 lg:space-y-3"
              >
                <p className="lg:-rotate-180 lg:[writing-mode:vertical-rl]">
                  {item.name}
                </p>
                <img
                  className="w-6 lg:h-6 lg:-rotate-90"
                  src={item.image}
                  alt={item.name}
                />
              </div>
            );
          })}
        </motion.div>
      ))}
    </div>
  );
};
export default StackTicker;
