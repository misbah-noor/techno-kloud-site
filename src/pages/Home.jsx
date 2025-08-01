import React from 'react'
import ChooseSection from '../components/ChooseSection'
import HowWeDo from '../components/HowWeDo'
import Acheivements from '../components/Acheivements'
import ContactSection from '../components/ContactSection'
import FeaturedWork from '../components/FeatureWork'
import { motion } from 'framer-motion'

function Home() {
  return (
     <div className='min-h-screen'>
     <section className="min-h-[400px] md:min-h-[500px] bg-cover bg-center bg-[#2c3e50] text-white p-10 text-center flex items-center justify-center flex-col"
     style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)),url('/images/about2.jpg')`}}>
      <motion.h2
       initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }} 
      className="md:text-5xl text-3xl font-bold mb-4 max-w-[250px] text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">Committed
      to be creative
      </motion.h2>
      <motion.p
       initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }} 
      className='text-lg'>We create beautiful experiences that drive successful businesses.</motion.p>
    </section>

    <section>
      <ChooseSection />
    </section>
    <section>
      <HowWeDo />
      <Acheivements />
      <FeaturedWork />
      <ContactSection />
    </section>


    </div>
  )
}

export default Home