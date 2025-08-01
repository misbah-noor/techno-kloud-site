import React from 'react'
import ContactSection from '../components/ContactSection'
import UniqueSection from '../components/UniqueSection'
import MissionSection from '../components/MissionSection'
import Acheivements from '../components/Acheivements'
import TeamCard from '../components/TeamCard'
import teams from '../data/team'
import { motion } from 'framer-motion'


function About() {
  return (
    <section className='min-h-screen'>
     <div className="min-h-[400px] md:min-h-[500px] bg-cover bg-center bg-[#2c3e50] text-white p-10 text-center flex items-center justify-center flex-col" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),url('/images/aboutb1.jpg')`}}>
      <motion.h2 
       initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
      className="md:text-5xl text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text mb-4">About Us
      </motion.h2>
      <motion.p 
       initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
      className='max-w-3xl mx-auto text-md'>We pride ourselves in our ability to deliver our client’s vision. Customer satisfaction is our number one priority. We understand that our work is our expression to the outside world and we make sure that we produce high-quality solutions. </motion.p>
    </div>
    <section className='pt-12 bg-gray-50'>
      <MissionSection />
    </section>

    {/* Unique section */}
    <section className='bg-white'>
    <UniqueSection />
    </section>

    {/* Team section */}
    <h2 className='text-3xl md:text-4xl text-slate-800 font-semibold text-center pt-10'>Life at TechnoKloud</h2>
   <div className='px-4 pb-7 mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
      {
        teams.map((team)=>(
        <TeamCard 
        key={team.id}
        image={team.image}
        />          
        ))
      } 
      </div>    

    {/* Acheivements section */}
    <Acheivements />

    {/* contact form  */}
    <ContactSection />
    </section>
  )
}

export default About