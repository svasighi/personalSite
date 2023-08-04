import { Stacks } from '../../constants/stacks';

import { motion } from 'framer-motion';

const StackSlider = () => {
  return (
    <motion.div
      transition={{
        duration: 15,
        delay: 0,
        ease: 'linear',
        repeat: Infinity,
        stiffness: 100,
      }}
      initial={{ y: 0 }}
      animate={{ y: -innerHeight }}>
      {[...Stacks, ...Stacks].map((stack) => (
        <div
          key={stack.id}
          className="flex flex-col space-y-3 items-center w-6 my-10">
          <p className="[writing-mode:vertical-rl] -rotate-180">{stack.name}</p>
          <img className="h-6 -rotate-90" src={stack.image} alt={stack.name} />
        </div>
      ))}
    </motion.div>
  );
};
export default StackSlider;
