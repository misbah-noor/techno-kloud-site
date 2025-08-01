import React from 'react'
import { motion } from 'framer-motion'

const FieldCard = ({ title, image, description }) => {

    const contentItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div 
     variants={contentItemVariants} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.3}} 
    className='bg-white rounded-xl hover:shadow-2xl hover:shadow-gray-400 overflow-hidden py-4 px-3 border-2 border-gray-300 transition-all duration-500'>
      {/* Field Image */}
      <div className='flex items-center justify-center'>
      <img src={image} alt={title} className='object-contain md:h-50 md:w-50 w-30 h-30'/>
      </div>
      {/* Field Info */}
      <div className='p-5 text-left'>
        <h2 className='text-2xl text-gray-900 font-bold mb-3'>{title}</h2>
        <p className='text-lg text-gray-700'>{description}</p>
      </div>
    </motion.div>
  )
}

export default FieldCard
