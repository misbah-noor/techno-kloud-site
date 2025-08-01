import react from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function FeatureWork() {

   const contentItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.7,
        ease: "easeInOut"
      },
    },
  }

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
    <section className="w-full py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Top Heading */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
           variants={contentItemVariants} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.3}} 
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Featured{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text">Work</span>
          </motion.h2>
          <motion.p 
           variants={contentItemVariants} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.3}} 
          className="text-md md:text-lg text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover our latest projects and innovative solutions that have transformed businesses across various
            industries.
          </motion.p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-18 items-center mx-auto max-w-4xl">
                 {/* Left Column - Content */}
                 {/* <div> */}
                 <motion.div
                 variants={slideInFromLeft}
                 initial='hidden'
                 whileInView="visible"
                 viewport={{once: true, amount: 0.3}}
                 >
                     <Link to='https://www.firewallforce.se/'>
                     <img
                       src="/images/f1.png"
                       alt="Why choose us - Modern tech team collaboration"
                       className="h-auto object-cover cursor-pointer transition-transform duration-700 hover:scale-110"
                     /> 
                     </Link>
                 </motion.div>
                 {/* </div> */}
       
                 {/* Right Column - Image */}
                 <motion.div
                  variants={slideInFromRight}
                 initial='hidden'
                 whileInView="visible"
                 viewport={{once: true, amount: 0.3}} 
                 >
                     <Link to='https://play.google.com/store/apps/details?id=com.myavvocatoapp2'><img
                       src="/images/f2.png"
                       alt="Why choose us - Modern tech team collaboration"
                       className="h-auto object-cover cursor-pointer transition-transform duration-700 hover:scale-110"
                     /> </Link>
                 </motion.div>
               </div> 

       
      </div>
    </section>
  )
}
