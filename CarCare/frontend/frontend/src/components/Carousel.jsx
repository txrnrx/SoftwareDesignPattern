import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from 'react-icons/bs';

export default function Carousel({ slides, descriptions }) {
  let [current, setCurrent] = useState(0);
  let [animationKey, setAnimationKey] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
    setAnimationKey(prev => prev + 1); // Change the key to trigger re-animation
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
    setAnimationKey(prev => prev + 1); // Change the key to trigger re-animation
  };

  return (
    <div className="relative grid grid-cols-2 gap-4">
      <div className="overflow-hidden relative">
        <div
          className={`flex transition ease-out duration-400`}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((s, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img src={s} alt={`slide-${index}`} className="w-full" />
            </div>
          ))}
        </div>

        <div className="absolute top-0 h-full w-full flex justify-between items-center text-white px-10 text-3xl">
          <button onClick={previousSlide}>
            <BsFillArrowLeftCircleFill />
          </button>
          <button onClick={nextSlide}>
            <BsFillArrowRightCircleFill />
          </button>
        </div>

        <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
          {slides.map((s, i) => (
            <div
              onClick={() => {
                setCurrent(i);
                setAnimationKey(prev => prev + 1); // Change the key to trigger re-animation
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer ${
                i === current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>
      </div>

      <motion.div
        key={animationKey} // Use the key to trigger re-animation
        className="flex items-center justify-center text-white px-10 text-5xl lg:text-5xl font-bold leading-tight mt-8 " // Added mt-8 for margin-top
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.1,
          duration: 0.4,
        }}
      >
        <p>{descriptions[current]}</p>
      </motion.div>
    </div>
  );
}
