import react from 'react'
import processData from '../data/process';
import { motion } from 'framer-motion';
const HowWeDo = ()=> {

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
    <section className="w-full py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Centered Header Section */}
        <div className="text-center mb-16 md:mb-20">
            
          {/* Main Heading */}
          <motion.h2
          variants={contentItemVariants} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.3}} 
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            How We <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">Do?</span>
          </motion.h2>

          {/* Subheading */}
          <motion.p 
          variants={contentItemVariants} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.3}} 
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our proven methodology ensures successful project delivery through a systematic approach that combines
            innovation, expertise, and client collaboration at every step.
          </motion.p>

          {/* Decorative Line */}
          <div
          
          className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mb-12"></div>

          {/* Centered Image */}
          <div className="relative max-w-2xl mx-auto">
            <motion.div 
             variants={contentItemVariants} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.3}} 
            className="relative overflow-hidden bg-white rounded-lg shadow-2xl group p-3">
              <img
                src="/images/home3.png"
                alt="Our development process and methodology"
                className="md:h-[170px] h-auto aspect-auto"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>

            {/* Decorative Elements around Image */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tr from-blue-600 to-blue-800 rounded-full opacity-15 blur-2xl"></div>
          </div>
        </div>

        {/* 4 Columns Section */}
        <motion.div 
         variants={contentItemVariants} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.3}} 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {processData.map((column, index) => (
            <div
              key={column.id}
              className="group relative bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:border-blue-400/40 transition-all duration-500 hover:transform hover:scale-105"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Column Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 group-hover:text-blue-300 transition-colors duration-300">
                  {column.title}
                </h3>

                {/* List Items */}
                <ul className="space-y-3">
                  {column.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start space-x-3 text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                    >
                      {/* Bullet Point */}
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover:bg-blue-300 transition-colors duration-300"></div>

                      {/* List Item Text */}
                      <span className="text-sm md:text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"></div>
            </div>
          ))}
        </motion.div>

        {/* Bottom Decorative Elements */}
        <div className="flex justify-center mt-12 space-x-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  )
}


export default HowWeDo;