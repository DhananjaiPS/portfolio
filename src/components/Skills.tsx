'use client';

// FIX 1: Imported 'Variants' from framer-motion
import { motion, Variants } from 'framer-motion';
import { Sparkles, Code2, Server, Database, Cpu, Star, Pin } from 'lucide-react';

const skillsMatrix = [
  {
    category: 'Languages',
    icon: Code2,
    color: 'bg-yellow-100',
    rotate: '-rotate-2',
    skills: ['C++', 'C', 'Python', 'Java', 'TypeScript', 'Go']
  },
  {
    category: 'Web Dev',
    icon: Server,
    color: 'bg-pink-100',
    rotate: 'rotate-2',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'GraphQL', 'Next.js', 'React', 'Node.js', 'Docker', 'Git/Github']
  },
  {
    category: 'Hardware/IoT',
    icon: Cpu,
    color: 'bg-sky-100',
    rotate: '-rotate-1',
    skills: ['ESP32', 'Arduino', 'Sensors', 'Blynk', 'ESPCAM', 'Raspberry Pi']
  },
  {
    category: 'Backend & DB',
    icon: Database,
    color: 'bg-emerald-100',
    rotate: 'rotate-1',
    skills: ['PostgreSQL', 'MongoDB', 'Prisma', 'Redis', 'MySQL', 'DB Design']
  },
];

const marqueeImages = [
  "https://i.pinimg.com/1200x/04/af/34/04af343554cbcf8fb9d63fc0bf340181.jpg",
  "https://i.pinimg.com/736x/39/00/f1/3900f13bb4a0bc1c971ed2b6e6c893e2.jpg",
  "https://i.pinimg.com/1200x/51/13/aa/5113aa6fee1d4d892898294768e52365.jpg",
  "https://i.pinimg.com/1200x/ca/91/25/ca9125046cf778200cf3d269b5a2d61e.jpg",
  "https://i.pinimg.com/1200x/3f/9e/c5/3f9ec5c3d7e6b92171fc1e0ed4f1e395.jpg",
  "https://i.pinimg.com/1200x/12/65/8f/12658f014b75d9e22d3807c795195cc3.jpg",
  "https://i.pinimg.com/736x/19/4f/36/194f366d8b077b6ec9ec3b6c77e769e1.jpg",
  "https://i.pinimg.com/1200x/cf/f3/53/cff353c1f977ee6c592ee802e5b1362f.jpg",
  "https://i.pinimg.com/736x/56/77/58/5677580375d990a0bea0a40bf6748752.jpg",
  "https://i.pinimg.com/736x/39/8f/a8/398fa83b3d4e389ae762fbeeb843ee99.jpg",
  "https://i.pinimg.com/736x/cd/49/98/cd49983f21375948ff3bfb389105fcfd.jpg",
  "https://i.pinimg.com/736x/3e/f4/c3/3ef4c31bd376f9b625cb094d575146a9.jpg",
  "https://i.pinimg.com/736x/16/37/7f/16377ff4d8813d7f780374d5622cbebd.jpg"
];

const achievements = [
  { text: 'Qualified GATE DA 2026 (AIR 6,358), GATE DA 2025 (AIR 7,747), and GATE CS 2026 (AIR 20,661).', highlight: 'bg-yellow-200' },
  { text: 'Top 3 in Department CS - IoT ' },
  { text: 'Secured 2nd place out of 300+ at Hi-Tech TechXthone Hackathon.', highlight: 'bg-sky-200' },
  { text: '3X Acadamic Scholarship based on Performance' },
  
  
  { text: 'Best Research Paper Award on ”Connected Retail With Smart Shelves and Inventory Management” at International IoT, Robotics and Automation 5.0 Conference (2025), among 290+ Research papers.', highlight: 'bg-pink-200' },
  { text: 'Solved 800+ DSA problems across LeetCode, GFG, HackerRank.', highlight: 'bg-emerald-200' },
  { text: 'Led School football team in KVS Regional Sports Meet Kolkata, securing 1st position.', highlight: 'bg-orange-200' },
  
];

// FIX 2: Added ': Variants' to explicitly tell TypeScript what this object is
const containerVars: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

// FIX 3: Added ': Variants' here too. This fixes the specific error you were seeing.
const itemVars: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 150, damping: 15 } }
};

export default function Skills() {
  return (
    <div>
      <section className="relative min-h-screen bg-white sm:py-24 py-30 pb-35 font-sans overflow-hidden">

        <div
          className="absolute inset-0 bg-[url('https://i.pinimg.com/1200x/ac/24/dc/ac24dca5cc4bea79b6c7aee7c65ebb67.jpg')] 
                bg-center bg-repeat opacity-15 pointer-events-none bg-contain"
        ></div>

        {/* Notebook Grid Background */}
        <div
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '30px 30px' }}
        />

        {/* Crazy Floating Doodles */}
        <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute top-20 left-10 text-yellow-400 text-5xl z-0">✦</motion.div>
        <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute top-40 right-20 text-pink-400 text-5xl z-0">❤</motion.div>
        <motion.div animate={{ x: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute bottom-40 left-20 text-sky-400 text-6xl z-0">★</motion.div>

        <div className="container relative z-10 mx-auto max-w-6xl px-6">

          {/* Main Heading */}
          <div className="text-center mb-20 relative">
            <img src="/pic10.png" alt="" className='w-23 h-20 absolute sm:-top-13 right-20 animate-floating transition-transform duration-700 ease-out sm:block hidden' />
            <img src="/pic1.png" alt="" className='w-20 h-20 absolute sm:top-0 top-7 left-0 animate-floating transition-transform duration-700 ease-out ' />

            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter relative inline-block sm:top-0 -top-15">
              What I Do
              {/* Doodle Underline */}
              <img src="/pic43.png" alt="" className='sm:w-30 sm:h-34 w-20 h-17 absolute sm:top-5 -top-4 sm:-right-30 -right-22 rotate-10 rounded-xl sm:block hidden animate-floating transition-transform duration-700 ease-out ' />
              <img src="/pic43.png" alt="" className='sm:w-30 sm:h-34 w-20 h-24 absolute sm:top-10 -top-4 sm:-right-30 -right-22 rotate-18 rounded-xl sm:hidden block' />
              <svg className="absolute w-full h-4 -bottom-2 left-0 text-sky-400" viewBox="0 0 200 20" preserveAspectRatio="none">
                <path d="M0,10 Q50,0 100,10 T200,10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* LEFT: SCRAPBOOK SKILLS */}
            <div className="lg:col-span-7">
              <motion.div variants={containerVars} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {skillsMatrix.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVars}
                    whileHover={{ scale: 1.05, rotate: 0 }}
                    className={`relative p-6 rounded-2xl border-2 border-slate-800 bg-white shadow-[8px_8px_0px_#1e293b] ${item.rotate} transition-all duration-300 cursor-grab`}
                  >
                    {/* Masking Tape */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-yellow-100/80 border border-yellow-200/50 -rotate-3 backdrop-blur-sm z-10" />

                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-full border-2 border-slate-800 flex items-center justify-center ${item.color}`}>
                        <item.icon className="text-slate-800" strokeWidth={2.5} size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">{item.category}</h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-100 border-2 border-slate-800 rounded-full text-xs font-bold text-slate-700 shadow-[2px_2px_0px_#1e293b] hover:bg-slate-800 hover:text-white transition-all duration-300 cursor-grab">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT: PINNED ACHIEVEMENTS */}
            {/* FIX: Properly wrapped in a col-span div so grid doesn't break */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, x: 50, rotate: 5 }}
                whileInView={{ opacity: 1, x: 0, rotate: 2 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl border-2 border-slate-800 shadow-[12px_12px_0px_#1e293b] flex flex-col min-h-[600px]"
              >
                {/* BACKGROUND IMAGE WITH OVERLAY */}
                <div
                  className="absolute inset-0 z-0 opacity-20 pointer-events-none grayscale hover:grayscale-0 transition-all duration-700"
                  style={{
                    backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png'), url('https://i.pinimg.com/1200x/ca/91/25/ca9125046cf778200cf3d269b5a2d61e.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />

                {/* SOLID BACKUP COLOR (to ensure readability) */}
                <div className="absolute inset-0 bg-[#fffae6]/90 z-0" />

                <div className="relative z-10 p-8 flex-1">
                  {/* Push Pin */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-red-500 drop-shadow-lg z-20">
                    <Pin size={38} className="fill-red-500 -rotate-12" />
                  </div>

                  <h3 className="text-3xl font-black text-slate-900 mb-8 border-b-4 border-double border-slate-400 pb-4 font-serif italic flex items-center gap-2">
                    The Trophy Cabinet <Sparkles className="text-yellow-500 animate-pulse" />
                  </h3>

                  <ul className="space-y-6">
                    {achievements.map((achievement, index) => (
                      <motion.li
                        key={index}
                        whileHover={{ x: 10, rotate: -1 }}
                        className="flex items-start gap-4 group cursor-pointer"
                      >
                        <div className="mt-1 bg-white border-2 border-slate-800 p-1 rounded shadow-[2px_2px_0px_#1e293b] group-hover:bg-yellow-400 transition-colors">
                          <Star size={16} className="text-slate-800 fill-current" />
                        </div>
                        <p className="text-slate-700 font-bold leading-snug text-[16px]">
                          <span className={`relative inline-block px-1 transition-all duration-300 group-hover:${achievement.highlight} group-hover:rotate-1`}>
                            {achievement.text}
                          </span>
                        </p>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        <img src="/pic47.jpg" alt="" className='w-40 h-40 rounded-[100%] absolute -bottom-1 left-10 rotate-348 animate-floating transition-transform duration-700 ease-out' />
        <img src="/pic6.png" alt="" className='w-15 h-15  absolute -bottom-1 right-10 sm:bottom-10 sm:right-90 rotate-368 animate-floating transition-transform duration-700 ease-out ' />
        <img src="/pic41.png" alt="" className='w-26 h-29  absolute -bottom-1 right-10 sm:bottom-6 sm:right-190 rotate-348 animate-floating transition-transform duration-700 ease-out sm:hidden md:block hidden' />
        <img src="/pic40.png" alt="" className='w-26 h-23  absolute -bottom-1 right-10 sm:bottom-60 sm:right-270 rotate-378 animate-floating transition-transform duration-700 ease-out md:block hidden' />
        <img src="/pic49.png" alt="" className='w-25 h-25 sm:w-30 sm:h-30  absolute bottom-25 right-10 rotate-348 animate-floating transition-transform duration-700 ease-out' />

        <div className="py-16 flex flex-col items-center justify-center text-center">

          {/* Google Fonts Links */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Italianno&display=swap" rel="stylesheet" />

          <p className="text-[12px] sm:text-sm font-bold uppercase tracking-[0.3em] text-slate-900 mb-2">
            Crafted with passion by
          </p>

          {/* The Signature Paragraph */}
          <p
            className="text-black hover:text-blue-500 transition-colors duration-300 cursor-pointer text-[3.2em] sm:text-[4.5em]"
            style={{
              fontFamily: '"Italianno", cursive',
              fontWeight: 400,
              lineHeight: '1'
            }}
          >
            Dhananjai Pratap Singh
          </p>

        </div>
      </section>

      {/* --- MARQUEE SECTION --- */}
      <div className="relative z-10 bg-slate-900 py-6 border-t-2 border-slate-800 overflow-hidden">
        {/* "Recent Clicks" label */}
        <div className="absolute pt-10 top-0 left-4 -translate-y-1/2 bg-yellow-400 border-2 border-slate-800 px-3 py-0.5 text-[10px] font-black uppercase tracking-tighter rotate-[-2deg] z-20">
          Memory Lane
        </div>

        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-6 px-6 min-w-max"
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* Duplicate the array to make it infinite */}
            {[...marqueeImages, ...marqueeImages].map((img, idx) => (
              <div key={idx} className="relative group">
                {/* Masking Tape Effect */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-4 bg-white/40 border border-white/20 backdrop-blur-sm -rotate-3 z-10 opacity-80 group-hover:opacity-100 transition-opacity" />

                {/* Polaroid Frame */}
                <div className="bg-white p-1.5 pb-5 border-2 border-slate-800 shadow-lg transform group-hover:rotate-3 group-hover:scale-110 transition-all duration-300">
                  <img
                    src={img}
                    alt="Achievement visual"
                    className="w-24 h-24 object-cover border border-slate-200"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}