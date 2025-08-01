import React from 'react'
import ServiceCard from '../components/ServiceCard'
import OfferCard from '../components/OfferCard'
import services from '../data/service'
import offers from '../data/offer'
import fields from '../data/field'
import FieldCard from '../components/FieldCard'
import { motion } from 'framer-motion'

function Services() {
  return (
      <div className='min-h-screen'>
     <section className="min-h-[400px] md:min-h-[500px] bg-cover bg-center bg-[#2c3e50] text-white p-10 text-center flex items-center justify-center flex-col"
     style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url('/images/serviceb1.jpg')`}}>
      <motion.h2
       initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }} 
      className="md:text-5xl text-3xl font-bold text-transparent bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text mb-4">Services
      </motion.h2>
      <motion.p 
       initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
      className='max-w-lg'>The software solutions developed by our company are numerously recognized for usability and innovative features.</motion.p>
    </section>
    <section className='bg-gray-100 py-14'>
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }} 
        className='text-center'>
        <h2 className='text-gray-900 text-3xl font-semibold mb-8'>Software Development</h2>
        <p className='max-w-3xl mx-auto text-lg'>We provide software development, maintenance, support, deployment and implementation services as well as Web Development and Mobile Apps for both Android and iOS.</p>
        </motion.div>

        {/* Service Cards */}
        <div className='px-4 mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-8'>
        {
            services.map((service)=>(
              <ServiceCard 
              key={service.id}
              image={service.image}
              title={service.title}
              description={service.description}
              />
            ))
        }
        </div>
    </section>
    
    {/* offer section */}
     <section className='py-10'>
        <motion.div 
        initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }} 
        className='text-center'>
            <h2 className='text-blue-950 text-3xl font-bold mb-5'>What We Offer</h2>
            <p className='text-lg text-gray-600'>Our team is trained to solve problems and provide innovative solutions tailored carefully to meet client needs.</p>
        </motion.div>
      <div className='px-4 mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-8'>
         {
          offers.map((offer)=>(
            <OfferCard 
            key={offer.id}
            image={offer.image}
            title={offer.title}
            description={offer.description}
            />
          ))
        }
        </div>
     </section>
     {/* fields section */}
     <section className='py-7'>
     <motion.div 
     initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }} 
     className='text-center'>
            <h2 className='text-blue-950 text-3xl font-bold mb-5'>Emerging Fields</h2>
            <p className='text-lg text-gray-600'>Our team is trained to solve problems and provide innovative solutions tailored carefully to meet client needs.</p>
        </motion.div>
        <div className='px-4 mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-8'>
        {
            fields.map((field)=>(
            <FieldCard 
            key={field.id}
            image={field.image}
            title={field.title}
            description={field.description}
            />
            ))
        }
        </div>
     </section>
    </div>
  )
}

export default Services