import { useEffect, useState } from "react";
import achievements from "../data/company";
import { easeInOut, motion } from "framer-motion";

function CountUpNumber({ target, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [target]);
  

  return (
    <span className="text-2xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function CompanyAchievements() {

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

  return (
    <section className="w-full py-16 md:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Main Heading */}
        <div 
         className="text-center mb-12 md:mb-16">
          <motion.h2 
          variants={contentItemVariants} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.3}}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Our Company{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">
              Achievements
            </span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Achievement Cards */}
        <motion.div 
        variants={contentItemVariants} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.3}}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="group relative bg-gradient-to-br from-slate-950 to-blue-900 border border-blue-500/20 rounded-2xl px-5 py-8 text-center hover:border-blue-400 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-4">
                  <CountUpNumber target={achievement.number} suffix={achievement.suffix} />
                </div>
                <h3 className="text-md md:text-lg font-semibold text-gray-100 group-hover:text-white transition-colors duration-300">
                  {achievement.title}
                </h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-4 rounded-full"></div>
              </div>

              {/* Accent Dot */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </motion.div>

        {/* Dots Below */}
        <div className="flex justify-center mt-12 space-x-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-blue-400 rounded-full opacity-60"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
