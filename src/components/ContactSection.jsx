import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

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
    <section className="w-full py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Form */}
          <motion.div 
           variants={contentItemVariants} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.3}} 
          className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-slate-900">Get In Touch</h2>
              <p className="text-slate-600">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full border border-slate-200 rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
           variants={contentItemVariants} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.3}} 
          className="space-y-8">
            <div className="text-center lg:text-left space-y-4">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Request a Quote
              </h2>
              <p className="text-lg text-slate-600 max-w-md mx-auto lg:mx-0">
                Would you like to start a project with us? We are just one click away from hearing you, Don't wait.
              </p>

              <div className="flex items-center justify-center lg:justify-start space-x-2 text-slate-700">
               
                <h2 className="text-lg">Email: <span className="font-semibold">infotech@gmail.com</span></h2>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl mb-4 font-medium">Reviewed on</h2>
                <img
                  src="/images/c1.png"
                  alt="Modern office workspace"
                  className="h-15 w-29 object-contain transition-transform duration-300 "
                />

                <img src="/images/c2.png" alt="" className="h-20 w-26 object-contain transition-transform duration-300 "/>
                
              </div>

            

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Need Immediate Assistance?</h3>
              <p className="text-blue-100 mb-4">Our team is available 24/7 to help with urgent inquiries</p>
              <button className="bg-white text-blue-700 hover:bg-blue-50 font-medium py-2 px-4 rounded-lg transition">
                Call Now: (555) 123-4567
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
