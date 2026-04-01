'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronDown } from 'lucide-react';

export default function Experience() {
  // State for View More functionality
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-24 bg-white relative">
      <div
        className="absolute inset-0 bg-[url('https://i.pinimg.com/1200x/ac/24/dc/ac24dca5cc4bea79b6c7aee7c65ebb67.jpg')] 
                bg-center bg-repeat opacity-15 pointer-events-none bg-contain"
      ></div>

      {/* <img src="https://i.pinimg.com/1200x/93/79/b0/9379b0b74bc428a0101df7165f8f0b27.jpg" alt=""  set this image in bg with less visility  /> */}
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <img src="/pic6.png" alt="" className='w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-sky-200 animate-floating transition-transform duration-700 ease-out' />
          <h2 className="relative text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500  -bottom-10 sm:bottom-0
text-5xl sm:text-6xl font-black tracking-tight z-[9999] pointer-events-none sm:pr-0 pr-[50%]">
            Work Experience
          </h2>
        </motion.div>


        {/* EXACT ORIGINAL IMAGE - NO CHANGES */}
        <img
          src="/pic13.png"
          alt=""
          className="absolute top-0 right-0 w-64 h-64 bg-sky-50 rounded-bl-full opacity-80 z-[9999] pointer-events-none"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden group hover:border-sky-200 transition-colors duration-500"
        >
          {/* EXACT ORIGINAL DIV - NO CHANGES */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-50 rounded-bl-full -z-0 opacity-50 group-hover:scale-110 transition-transform duration-700 ease-out" />

          <div className="relative z-10 flex flex-col md:flex-row gap-2 items-start">
            <div className='flex justify-center items-center'>
              <div className="w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-sky-200">
                <Briefcase size={28} className="text-white text-sm sm:text-base" />

              </div>



            </div>


            <div className="flex-1">


              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">Full Stack Intern</h3>
                  <h4 className="text-xl text-sky-600 font-medium">Explorin</h4>
                </div>

                <div className="flex flex-col gap-2 mt-4 md:mt-0 text-slate-500 text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-sky-500" />
                    <span>July 2025 – August 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-sky-500" />
                    <span>Moradabad, Uttar Pradesh</span>
                  </div>
                </div>
              </div>

              {/* ONLY CHANGED THE PARAGRAPH TO ADD VIEW MORE */}
              <div className="relative mt-6">
                <span className="absolute -left-4 top-0 text-sky-200 text-4xl leading-none z-10">"</span>

                {/* line-clamp-3 hides extra lines on mobile. md:line-clamp-none keeps it full on desktop */}
                <p className={`text-slate-600 text-lg leading-relaxed relative ${isExpanded ? '' : 'line-clamp-3 md:line-clamp-none'}`}>
                  Developed modular SEO-optimized Next.js + TypeScript interfaces and optimized GraphQL/Prisma APIs, designed DB for high-performance, scalability and to reduce latency. Took end-to-end ownership of development to deploy, managed CI/CD, coordinated with backend teams for integration testing, and delivered reliable, production-ready features.
                </p>

                {/* Button is hidden on desktop (md:hidden) */}
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-2 flex items-center gap-1 text-sm font-bold text-sky-500 hover:text-sky-600 md:hidden transition-colors"
                >
                  {isExpanded ? 'View Less' : 'View More'}
                  <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                    <ChevronDown size={16} />
                  </motion.div>
                </button>
              </div>
              <img src="/pic10.png" alt="" className='sm:hidden  absolute -bottom-2 -right-2 w-15 h-14 sm:w-16 sm:h-16 flex items-center justify-center shrink-0 animate-floating transition-transform duration-700 ease-out ' />


            </div>
          </div>

        </motion.div>
      </div>
      <img src="/pic7.png" alt="" className=' hidden sm:block absolute bottom-10 right-10 w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-sky-200 animate-floating transition-transform duration-700 ease-in shadow-lg shadow-sky-200' />
    </section>
  );
}