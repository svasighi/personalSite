import classNames from 'classnames';
import { PauseIcon, PlayIcon } from '@heroicons/react/24/solid';
import { HTMLProps, useEffect, useLayoutEffect, useState, useRef } from 'react';
import WaveSurfer, { WaveSurferEvents } from 'wavesurfer.js';
import { motion } from 'framer-motion';

import SPECTRUM_CONFIG from './config';

const Player = ({
  file,
  ...props
}: { file: string } & HTMLProps<HTMLDivElement>) => {
  const [playing, setPlaying] = useState<boolean>(false);
  const spectrumRef = useRef<WaveSurfer>();

  useLayoutEffect(() => {
    if (!spectrumRef.current) {
      const initial = WaveSurfer.create(SPECTRUM_CONFIG);
      initial.load('/file_example.mp3');
      spectrumRef.current = initial;
      initial.on('finish', () => {
        initial.stop();
        setPlaying(false);
      });
    }
  });

  useEffect(() => {
    playing ? spectrumRef.current?.play() : spectrumRef.current?.pause();
  }, [playing]);

  const togglePlayer = () => {
    setPlaying(!playing);
  };

  return (
    <div
      className={classNames(
        'flex justify-center bg-gray-100 rounded-2xl pl-1.5 pr-5 py-2.5 items-center gap-3',
        props.className
      )}>
      <motion.div
        onClick={togglePlayer}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gray-200 h-11 w-11 flex justify-center items-center rounded-2xl space-x-3">
        {playing ? (
          <PauseIcon className="text-amber-400 w-5 h-5" />
        ) : (
          <PlayIcon className="text-amber-400 w-4 h-4" />
        )}
      </motion.div>
      <div className="flex-1" id="wave"></div>
    </div>
  );
};

export default Player;
