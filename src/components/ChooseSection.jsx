import react from 'react'
import { Link } from 'react-router-dom';
import { delay, motion } from 'framer-motion';


const ChooseSection = ()=> {

     const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const leftColumnVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  }

  const rightColumnVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  }

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
    <section className="w-full py-12 md:py-18 bg-gradient-to-br from-slate-50 to-blue-50">
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.3}} 
      className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div 
           variants={leftColumnVariants}
          className="space-y-6 lg:pr-8">
            {/* Heading */}
            <motion.div 
             variants={contentItemVariants}
            className="space-y-2">
              <h2 className="text-xl md:text-xl lg:text-3xl font-bold text-slate-900">
                Why
                <span className="text-transparent ml-3 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text">
                  Choose Us
                </span>
              </h2>
              <div className="w-15 h-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full"></div>
            </motion.div>

            {/* Paragraph */}
            <div className="space-y-4">
              <p className="text-base md:text-md text-slate-600 leading-relaxed">
              We are a full-service software house. Our clients ranges from public and private sectors including start-ups. What separates us from others is the flexibility of hiring us as a team of experts or individual developers. From the start, till the end, we have you covered. We provide our clients with successful solutions in UI/UX Design, Web Development and Mobile App development.
              </p>
            </div>

            

            {/* CTA Button */}
            <div className="pt-1">
              <Link to='/about'><button className="group relative px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <span className="relative z-10">Learn More About Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button></Link>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
          variants={rightColumnVariants}
          >
            {/* Main Image Container */}
            {/* <div className="relative overflow-hidden rounded-2xl shadow-2xl group"> */}
              <img
                src="/images/home.png"
                alt="Why choose us - Modern tech team collaboration"
                className="h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              /> 
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}


export default ChooseSection;