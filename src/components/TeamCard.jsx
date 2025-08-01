import React from 'react'
import { motion } from 'framer-motion'

const TeamCard = ({ image }) => {

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
    className='rounded-lg hover:shadow-2xl hover:shadow-blue-400 overflow-hidden border border-blue-500/20 hover:scale-105 transition-all duration-500'>
      {/* Service Image */}
   
      <img src={image} alt='error'/>
     
    </motion.div>
  )
}

export default TeamCard
