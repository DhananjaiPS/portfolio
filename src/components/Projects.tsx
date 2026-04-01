'use client';

import { motion, useMotionTemplate, useMotionValue, Variants, AnimatePresence } from 'framer-motion';
import { Cpu, Train, ShoppingBag, ShoppingCart, ArrowUpRight, Brain } from 'lucide-react';
import Link from 'next/link';
import { MouseEvent, useState, useEffect } from 'react';

// Strict Blue & White Theme Data
const projects = [
  {
    title: 'Smart Dukan',
    tech: 'Next.js, TypeScript, IoT Sensors, ML , MongoDB',
    description: [
      'Developed an end-to-end Smart Retail Ecosystem integrating IoT sensors.',
      'Engineered a lightweight CV inference pipeline achieving 81.4% accuracy.',
      'Architected real-time sync using WebSockets for the Next.js dashboard.'
    ],
    icon: Cpu,
    link: 'https://www.youtube.com/watch?v=ExY-FNohTgM',
    image: ['iot1.png', 'iot2.png', 'iot3.png'],
  },
  {
    title: 'Rail Booking System',
    tech: 'Next.js, PostgreSQL, Redis, Stripe, JWT',
    description: [
      'Developed a scalable IRCTC-inspired ticketing platform using Next.js 14.',
      'Engineered distributed locking using Redis to auto-rollback bookings.',
      'Implemented Prisma Transactions for seat allocation ensuring ACID compliance.'
    ],
    icon: Train,
    link: 'https://irctc-lilac.vercel.app',
    image: ['irctc1.png', 'irctc2.png', 'irctc3.png'],
  },
  {
    title: 'DSA Dojo – AI DSA Instructor',
    tech: 'NextJS, TypeScript, Gen AI Models, MongoDB',
    description: [
      'AI-powered platform to master Data Structures and Algorithms with adaptive personalized learning.',
      'Provides level-based recommendations, problem explanations, and 24/7 AI tutoring.',
      'Offers progress analytics, interview preparation patterns, and curated challenge sets.'
    ],
    icon: Brain,
    link: 'https://dsa-dojo-web.vercel.app/',
    image: ['dsa1.png', 'dsa2.png', 'dsa3.png'],
  },
  {
    title: 'Mini - Amazon',
    tech: 'ReactJS, Tailwind, Redux , Dummy JSON',
    description: [
      'Built a responsive pixel-perfect Amazon clone with 200+ products.',
      'Implemented real-time search, filtering, and dynamic order management.',
      'Integrated APIs and used Redux for state management, enhancing UX.'
    ],
    icon: ShoppingCart,
    link: 'https://amazon-react-clone-five.vercel.app',
    image: ['amazon1.png', 'amazon2.png', 'amazon3.png'],
  }
];

const containerVars: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVars: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(5px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

// --- CUTE & COMPACT PREMIUM CARD ---
function ProjectCard({ project }: { project: typeof projects[0] }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.image.length);
    }, 3500); // Crossfade every 3.5 seconds
    return () => clearInterval(timer);
  }, [project.image.length]);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      variants={itemVars}
      onMouseMove={handleMouseMove}
      className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-[0_8px_24px_rgba(14,165,233,0.04)] transition-all duration-400 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_12px_32px_rgba(14,165,233,0.12)]"
    >
      {/* Interactive Soft Blue Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-20 rounded-[2rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(56, 189, 248, 0.05),
              transparent 80%
            )
          `,
        }}
      />

      {/* Image Header (Shorter and Cuter) with Slideshow */}

      <div className="relative h-40 w-full shrink-0 overflow-hidden bg-slate-50">

        {/* Hover scale wrapper */}
        <div className="relative h-full w-full transition-transform duration-700 ease-out group-hover:scale-105">
          <AnimatePresence>
            <motion.img
              key={currentImage}
              src={project.image[currentImage]}
              alt={`${project.title} snapshot ${currentImage + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 h-[20vh] w-full object-cover"
            />
          </AnimatePresence>
        </div>

        {/* Slideshow Indicators */}
        <div className="absolute bottom-3 left-1/2 z-30 flex -translate-x-1/2 gap-1.5">
          {project.image.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === currentImage ? 'w-4 bg-white' : 'w-1.5 bg-white/50'
                }`}
            />
          ))}
        </div>

        {/* Very soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-80" />
        <div className="absolute inset-0 bg-sky-400/10 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0" />

        {/* Tiny Glassmorphism Link Button */}
        <Link
          href={project.link}
          className="absolute right-3 top-3 z-30 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white hover:text-sky-500"
          aria-label="View Project"
        >
          <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>

      {/* Card Content Body */}
      <div className="relative z-10 flex flex-1 flex-col px-5 pb-6 pt-7">


        {/* Cute Floating Overlapping Icon */}
        <div className="absolute -top-6 left-5 flex h-12 w-12 items-center justify-center rounded-[1rem] border-[3px] border-white bg-gradient-to-br from-sky-400 to-blue-500 shadow-md shadow-sky-500/20 transition-transform duration-500 group-hover:scale-110">
          <project.icon size={18} className="text-white drop-shadow-sm" strokeWidth={2.5} />
        </div>

        {/* Title */}
        <h3 className="mb-2.5 text-lg font-extrabold tracking-tight text-slate-800 transition-colors group-hover:text-sky-600 md:text-xl">
          {project.title}
        </h3>

        {/* Tiny Tech Stack Pills */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.tech.split(', ').map((tech, i) => (
            <span
              key={i}
              className="rounded-full border border-sky-100 bg-sky-50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-sky-600 transition-colors duration-300 group-hover:border-sky-200 group-hover:bg-sky-100"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description List */}
        <ul className="mt-auto flex flex-col gap-2">
          {project.description.map((desc, i) => (
            <li key={i} className="flex items-start gap-2 text-[12.5px] font-medium leading-[1.6] text-slate-500">
              <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.5)]" />
              <span>{desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

// --- MAIN SECTION ---
export default function Projects() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white py-20 selection:bg-sky-100 selection:text-sky-800">
      {/* <div
        className="absolute inset-0 bg-[url('https://i.pinimg.com/1200x/ac/24/dc/ac24dca5cc4bea79b6c7aee7c65ebb67.jpg')] 
                bg-center bg-repeat opacity-15 pointer-events-none bg-contain"
      ></div> */}
      {/* Super subtle Ambient Orbs for the white background */}
      <div className="pointer-events-none absolute -left-[5%] top-[10%] h-[300px] w-[300px] rounded-full bg-sky-100/50 blur-[80px]" />
      <div className="pointer-events-none absolute -right-[5%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-blue-50/50 blur-[100px]" />

      {/* Reduced max-width to make the grid naturally smaller and cuter */}
      <div className="container relative z-10 mx-auto max-w-5xl px-4 md:px-6">
        <img src="/pic9.png" alt="" className=' absolute sm:top-30 md:-top-3 sm:left-0 h-10 w-13 sm:h-17 sm:w-22 rotate-10 animate-floating transition-transform duration-700 ease-out' />
        <img src="/pic30.png" alt="" className=' absolute top-0 right-0 h-25 w-19 rotate-10 animate-floating transition-transform duration-700 ease-out' />
        {/* Header Section */}
        <div className="mb-12 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-sky-100 bg-sky-50 px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] text-sky-500 shadow-sm"
          >
            <Cpu size={12} strokeWidth={2.5} />
            INNOVATION ARCHIVE
          </motion.div>

          {/* Main Heading with Blue Gradient */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text pb-2 text-4xl font-black tracking-tight text-transparent drop-shadow-sm md:text-5xl"
          >
            Featured Work.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-2 max-w-md text-[13.5px] font-medium leading-relaxed text-slate-500"
          >
            A curated selection of my recent engineering endeavors, merging hardware integration with scalable web architectures.
          </motion.p>
        </div>

        {/* The Grid */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6 relative"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
        <img src="/pic21.png" alt="" className=' absolute sm:bottom-30 md:-bottom-3 sm:-right-17 h-10 w-13 sm:h-17 sm:w-22 rotate-10 animate-floating transition-transform duration-700 ease-out' />
      </div>
    </section>
  );
}