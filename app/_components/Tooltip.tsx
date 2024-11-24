import { motion } from 'motion/react';
import React, { useState } from 'react'
import { div } from 'three/examples/jsm/nodes/Nodes.js';

type Props = {
    children: React.ReactNode;
    trigger: React.ReactNode;
}

const Tooltip = ({ children, trigger }: Props) => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative'>
      <motion.div className='absolute top-0 left-0 rounded-full cursor-help' onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>{trigger}
      <div className='absolute inset-0 rounded-full ring-1 ring-grass-500 animate-ping'></div>

      </motion.div>
      <motion.div  animate={ isOpen ? { opacity: 1 } : { opacity: 0 }} className='absolute top-5 origin-center left-[50%] -translate-x-1/2 transition-all duration-300 text-sm bg-white p-1 rounded-md text-ash-500 whitespace-nowrap'>{children}</motion.div>  
    </div>
  )
}

export default Tooltip