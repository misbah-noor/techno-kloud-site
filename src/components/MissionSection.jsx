import react from 'react'
import { motion } from 'framer-motion'

export default function MissionSection() {

   const contentItemVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.7,
        ease: "easeInOut"
      },
    },
  }
  return (
    <section className="w-full py-10 bg-gradient-to-b from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.h1 
           variants={contentItemVariants} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.3}} 
          className="text-4xl font-bold tracking-tight text-blue-950 sm:text-5xl lg:text-6xl">Our Mission</motion.h1>

          {/* Subheading Paragraph */}
          <motion.p 
           variants={contentItemVariants} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.3}} 
          className="text-lg md:text-xl text-blue-800 leading-relaxed max-w-3xl">
            We're dedicated to revolutionizing the tech industry through innovative solutions that empower businesses
            and individuals to achieve their digital transformation goals. Our commitment to excellence drives us to
            create cutting-edge technology that makes a meaningful impact on the world.
          </motion.p>

          {/* Center Image */}
          <div className="relative mt-12 mb-8">
            <div className="relative">
              {/* Decorative background elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-3xl blur-xl"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-2xl"></div>

              {/* Main image container */}
              <motion.div 
               variants={contentItemVariants} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.3}} 
              className="relative bg-white rounded-2xl p-8 shadow-2xl border border-blue-100">
              <img src="/images/about1.png" alt="" 
               width={600}
               height={400}
               className="w-full h-auto max-w-lg mx-auto"
              />
              </motion.div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute top-0 left-0 w-16 h-16 bg-cyan-400/30 rounded-full blur-lg animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-blue-600/30 rounded-full blur-lg animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -left-8 w-12 h-12 bg-blue-500/40 rounded-full blur-md animate-bounce"></div>
            <div className="absolute top-1/4 -right-6 w-14 h-14 bg-cyan-300/40 rounded-full blur-md animate-bounce delay-500"></div>
          </div>

          {/* Additional mission statement */}
          <motion.div
           variants={contentItemVariants} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.3}} 
           className="bg-gradient-to-r from-blue-900 to-blue-950 rounded-2xl p-8 text-white max-w-2xl">
            <p className="text-lg font-medium">
              "Innovation is not just what we do—it's who we are. Every line of code, every solution we build, is
              crafted with the vision of creating a better, more connected digital future."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
