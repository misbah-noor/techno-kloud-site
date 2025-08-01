import React from 'react'
import { motion } from 'framer-motion';

const OfferCard = ({ title, image, description }) => {

    const slideInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
       variants={slideInFromRight}
                 initial='hidden'
                 whileInView="visible"
                 viewport={{once: true, amount: 0.3}}
     className='hover:bg-gradient-to-br hover:from-slate-400 hover:via-blue-800 hover:to-slate-900 rounded-xl hover:shadow-2xl hover:shadow-blue-200 hover:text-white overflow-hidden py-4 px-3 border-2 border-gray-200 transition-all duration-400'>
      {/* Offer Image */}
      <div className='flex items-center justify-center'>
      <img src={image} alt={title} className='object-contain md:h-50 md:w-50 h-30 w-30'/>
      </div>
      {/* Offer Info */}
      <div className='p-5 flex flex-col justify-center items-left'>
        <h2 className='text-2xl font-bold mb-4'>{title}</h2>
        <p className='text-lg '>{description}</p>
      </div>
    </motion.div>
  )
}

export default OfferCard
