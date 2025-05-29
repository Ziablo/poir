'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  fromBottom?: boolean;
}

const ScrollReveal = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up',
  fromBottom = false
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false,
    margin: fromBottom ? "100px" : "-100px",
    amount: fromBottom ? 0.2 : 0.5
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: fromBottom 
        ? (direction === 'up' ? -50 : direction === 'down' ? 50 : 0)
        : (direction === 'up' ? 50 : direction === 'down' ? -50 : 0),
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal; 