import react from 'react'
import { motion } from 'framer-motion';


export default function UniqueSection() {

   const slideInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

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
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-900 to-blue-950">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div 
           variants={slideInFromLeft}
                 initial='hidden'
                 whileInView="visible"
                 viewport={{once: true, amount: 0.3}}
          className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">What we do</h2>
            <p className="text-lg text-blue-100 leading-relaxed">
              Discover what drives us forward and the values that shape our journey.
            </p>

            {/* Navigation Links */}
            <nav className="mt-8">
              <ul className="space-y-4 text-md">
                  <li className='group flex items-center text-blue-200 hover:text-cyan-400 transition-colors duration-300'>
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                  UI/UX Design
                </li>
                <li className='group flex items-center text-blue-200 hover:text-cyan-400 transition-colors duration-300'>
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                   Wesite Development
                </li>
                  <li className='group flex items-center text-blue-200 hover:text-cyan-400 transition-colors duration-300'>
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                   Mobile App Development
                </li>
                  <li className='group flex items-center text-blue-200 hover:text-cyan-400 transition-colors duration-300'>
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                   Sales & Marketing
                </li>
                 <li className='group flex items-center text-blue-200 hover:text-cyan-400 transition-colors duration-300'>
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                   Social Media
                </li>
                 <li className='group flex items-center text-blue-200 hover:text-cyan-400 transition-colors duration-300'>
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                   eCommerce store
                </li>
                  <li className='group flex items-center text-blue-200 hover:text-cyan-400 transition-colors duration-300'>
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                   Tech Support
                </li>
                  <li className='group flex items-center text-blue-200 hover:text-cyan-400 transition-colors duration-300'>
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                   Architecture Solution
                </li>
              </ul>
            </nav>
          </motion.div>

          {/* Right Column - Image */}
            <motion.div
             variants={slideInFromRight}
                 initial='hidden'
                 whileInView="visible"
                 viewport={{once: true, amount: 0.3}}
            className="overflow-hidden rounded-2xl shadow-2xl">
              <img src="/images/home2.jpg" alt="" 
               width={500}
               height={600}
               className="w-full h-auto object-cover hover:scale-105 transition-all duration-300"
              /> 
            </motion.div>            
          
        </div>
      </div>
    </section>
  )
}
