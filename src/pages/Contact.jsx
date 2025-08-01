import React from 'react'
import ContactSection from '../components/ContactSection'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <div>
         <div className="min-h-[400px] md:min-h-[500px] bg-[#2c3e50] bg-cover bg-center text-white p-10 text-center flex items-center justify-center flex-col"
         style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),url('/images/banner4.webp')`}}>
      <motion.h2
       initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }} className="md:text-5xl text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text mb-6">Contact Us
      </motion.h2>
      <motion.p 
       initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
      className='text-lg max-w-lg'>We provide a wide array of professional and efficient software solutions that result in extraordinary digital experiences. </motion.p>
    </div>
      <ContactSection />
    </div>
  )
}

export default Contact
