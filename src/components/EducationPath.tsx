'use client';

import { useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { School, BookOpen, GraduationCap, Star, Navigation, Rocket, StarHalf, StarIcon } from 'lucide-react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Stars, Sparkles as DreiSparkles, Line } from '@react-three/drei';
import * as THREE from 'three';

const schools = [
  {
    id: 1, name: 'Primary Airforce School, J&K', period: 'Primary Class', details: 'Started the foundational years of my education here. Learned the basics of curiosity!', icon: School,
    image: "https://www.airforceschoolsrinagar.com/files/photo%205.jpg", color: 'from-orange-400 to-amber-500', yOffset: 0
  },
  {
    id: 2, name: 'Kendriya Vidyalaya No.2 Srinagar, J&K', period: '1st Class',
    details: 'Developed a strong interest in science and mathematics surrounded by beautiful mountains.', icon: School,
    image: "https://yayskool-school-images.s3.ap-south-1.amazonaws.com/kendriya-vidyalaya-no-2-srinagar-579317163.png", color: 'from-blue-300 to-blue-500', yOffset: 66
  },
  {
    id: 3, name: 'Kendriya Vidyalaya Jalipa Cantt, Barmer, Rajasthan', period: 'Middle/High',
    details: 'Continued academic excellence and participated in extracurricular activities.', icon: School, image: 'https://scontent.fagr1-4.fna.fbcdn.net/v/t39.30808-6/299598092_444610587681081_3665920072763940845_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=F7VgV2rm8hYQ7kNvwHysXLF&_nc_oc=AdplGNIjfgNK8ExflhBf1rPeJqaoSC8GL4ocJ7r53l-UVFq6JXZSCC5YQjKRhisCw7CgzKeyzlFJ50q7-69gMay4&_nc_zt=23&_nc_ht=scontent.fagr1-4.fna&_nc_gid=gJAjwTjXQyHZcD7OQmdcAA&_nc_ss=7a389&oh=00_AfxYDTzow93cNPMzZNvmXwOWkSWgBqXrUL7gFCoSvE_eDw&oe=69D1FA5A', color: 'from-lime-400 to-emerald-500', yOffset: -34
  },
  {
    id: 4, name: 'Kendriya Vidyalaya (KV) STC BSF Humhama , J&K', period: 'High School',
    details: 'Focused on core subjects and began exploring the magic of programming logic.', icon: School, image: 'https://scontent.fagr1-4.fna.fbcdn.net/v/t39.30808-6/648474029_1726113688551467_1084202230752872086_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=2a1932&_nc_ohc=IBkYCXIsZVMQ7kNvwGZqnuD&_nc_oc=AdrfevqKn1vigNvipqCLi6lpz7qOeSH1DZs3IRlpwXRKhhBm69t_Bcsyp8bz6MXcB-2cecvuAHUb-I18ck4KZR5D&_nc_zt=23&_nc_ht=scontent.fagr1-4.fna&_nc_gid=BZDVx-xnwGZpdHw75BIiWA&_nc_ss=7a389&oh=00_Afx9YnDG36dDeVLU9NWmuX2DxGKI3zw8B1RHqf5a3zhQ7g&oe=69D20418', color: 'from-emerald-400 to-teal-500', yOffset: 52
  },
  {
    id: 5, name: 'Kendriya Vidyalaya Simultaia, Krishnanagar, Nadia, West Bengal', period: 'High School',
    details: 'Transitioned towards advanced sciences, mathematics, and deeper analytical thinking.', icon: BookOpen, image: 'https://yayskool-school-images.s3.ap-south-1.amazonaws.com/kendriya-vidyalaya-nadia-835311690.png', color: 'from-teal-400 to-cyan-500', yOffset: -48
  },
  {
    id: 6, name: 'Kendriya Vidyalaya No. 2 Kanchrapara,24 Parganas (North), West Bengal', period: 'Intermediate',
    details: 'Intermediate (12th PCM) - Secured an amazing 93%. The turning point for engineering.', icon: Star, image: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAwepScTjOGUAoaXt3QKX9SBSxPe2LiL83pKTpe5fndIcJHg6ueCSOQGW2kV7YXE2GJfhWYUdQE3itH3Thtnwm0Mq4ppeqH8PS4vA2PrIeRWWxMXbWR8fr3qgrNFfAIDLMWfCzEm4=s1360-w1360-h1020-rw', color: 'from-cyan-400 to-sky-500', yOffset: 34
  },
  {
    id: 7, name: 'Moradabad Institute of Technology, Moradabad , Uttar Pradesh', full_name: 'Dr. A.P.J. Abdul Kalam Technical University', period: 'B.Tech CSE (IoT)',
    details: 'Bachelor of Technology in Computer Science Engineering - Specialization in IoT. CGPA: 8.5', icon: GraduationCap, image: 'https://assets.kollegeapply.com/images/1751546624722-1746427168phpgV7hss.jpeg', color: 'from-blue-500 to-indigo-600', yOffset: -18
  },
];

function createCurve() {
  return new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3(-7, -1.1, 0),
      new THREE.Vector3(-5.3, 1.2, -1),
      new THREE.Vector3(-3.2, -0.8, 0.7),
      new THREE.Vector3(-1.2, 1.6, -0.8),
      new THREE.Vector3(1.3, -1.0, 0.5),
      new THREE.Vector3(3.7, 1.0, -0.2),
      new THREE.Vector3(6.2, -0.55, 0.8),
    ],
    false,
    'catmullrom',
    0.5
  );
}

function Traveler({ activeIndex, curve }: { activeIndex: number; curve: THREE.CatmullRomCurve3 }) {
  const groupRef = useRef<THREE.Group>(null);
  const orbRef = useRef<THREE.Mesh>(null);
  const progress = useRef(0);
  const { camera } = useThree();
  const target = useMemo(() => activeIndex / (schools.length - 1), [activeIndex]);

  useFrame((state, delta) => {
    progress.current = THREE.MathUtils.damp(progress.current, target, 3, delta);
    const point = curve.getPointAt(progress.current);
    const lookAhead = curve.getPointAt(Math.min(progress.current + 0.01, 1));

    if (groupRef.current) {
      groupRef.current.position.copy(point);
      groupRef.current.lookAt(lookAhead);
      groupRef.current.position.y += Math.sin(state.clock.elapsedTime * 6) * 0.08;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 5) * 0.12;
    }

    if (orbRef.current) {
      orbRef.current.rotation.x += delta * 2.2;
      orbRef.current.rotation.y += delta * 2.8;
    }

    const camTarget = new THREE.Vector3(point.x + 2.2, point.y + 1.5, point.z + 6.5);
    camera.position.lerp(camTarget, 0.03);
    camera.lookAt(point.x, point.y, point.z);
  });

  return (
    <group ref={groupRef} scale={0.75}>
      <mesh ref={orbRef}>
        <icosahedronGeometry args={[0.75, 1]} />
        <meshStandardMaterial color="#22c55e" emissive="#16a34a" emissiveIntensity={1} roughness={0.25} metalness={0.6} wireframe />
      </mesh>

      <mesh position={[0, 0.95, 0]} rotation={[0, 0, Math.PI / 6]}>
        <coneGeometry args={[0.28, 0.9, 4]} />
        <meshStandardMaterial color="#ffffff" emissive="#38bdf8" emissiveIntensity={0.7} />
      </mesh>

      <mesh position={[0, -0.95, 0]}>
        <sphereGeometry args={[0.24, 20, 20]} />
        <meshStandardMaterial color="#fde68a" emissive="#f59e0b" emissiveIntensity={0.9} />
      </mesh>

      <DreiSparkles count={14} scale={4} size={2.5} speed={0.8} color="#facc15" />
    </group>
  );
}

function Scene({ activeIndex }: { activeIndex: number }) {
  const curve = useMemo(() => createCurve(), []);

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 10, 5]} intensity={1.4} color="#fef08a" />
      <directionalLight position={[-10, -10, -5]} intensity={0.8} color="#38bdf8" />

      <Float speed={2} rotationIntensity={1.3} floatIntensity={2.5}>
        <group position={[0, 0.4, -4]} scale={2.1}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[1.8, 0.06, 16, 120]} />
            <meshStandardMaterial color="#f59e0b" metalness={0.9} roughness={0.18} />
          </mesh>
          <mesh>
            <octahedronGeometry args={[1.05]} />
            <MeshDistortMaterial color="#38bdf8" distort={0.25} speed={2} wireframe />
          </mesh>
        </group>
      </Float>

      <Line points={curve.getPoints(180)} color="#22c55e" lineWidth={3} dashed dashScale={1} dashSize={0.22} gapSize={0.14} />
      <Traveler activeIndex={activeIndex} curve={curve} />
      <Stars radius={100} depth={50} count={4000} factor={4} saturation={0} fade speed={1} />
      <DreiSparkles count={90} scale={[18, 10, 8]} size={3} speed={0.6} color="#ffffff" />
    </>
  );
}

export default function EducationalMapAdventure() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ActiveIcon = schools[activeIndex].icon;

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fdfbf7] bg-white py-12 font-sans">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-55">
        <Canvas camera={{ position: [0, 1, 10], fov: 45 }}>
          <Scene activeIndex={activeIndex} />
        </Canvas>
      </div>



      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.55),transparent_45%),linear-gradient(to_bottom,rgba(255, 255, 255, 0.25),rgba(253,251,247,0.93))]" />



      <div className="container relative z-10 mx-auto flex h-full flex-col px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mt-8 mb-8 text-center">

          <div className="mb-3 inline-flex items-center gap-2 rounded-full 
  border border-amber-400 
  bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400
  px-6 py-2 
  text-[13px] font-extrabold tracking-[0.25em]
  text-amber-900 shadow-md shadow-amber-300/50">
            <Navigation size={16} className="text-amber-900" />
            THE JOURNEY MAP
          </div>
          <img src="https://i.pinimg.com/474x/bd/57/f2/bd57f2141a9d3e96ff01a03fa0a292ac.jpg" alt="" className='absolute top-8 mt-10 right-5 w-30 h-30 object-contain p-3 sm:hidden' />


          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 text-6xl font-black tracking-tight mt-10">
            My Educational Expedition
            <img src="https://i.pinimg.com/474x/bd/57/f2/bd57f2141a9d3e96ff01a03fa0a292ac.jpg" alt="" className='absolute  sm:top-0 right-0 w-40 h-40 object-contain p-3 hidden sm:block' />
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-[13px] leading-6 text-slate-600 md:text-sm">
            Click any destination and the explorer rushes there like an adventure chapter.
          </p>
        </motion.div>

        <div className="relative mx-auto mb-12 w-full max-w-6xl px-2 md:px-4 h-[40vh] ">
          <div className="rounded-[32px] bg-white px-4 py-6  backdrop-blur-md md:px-8 md:py-8">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div className="rounded-full border border-white/70 bg-white/80 px-3 py-1.5 text-[12px] font-medium tracking-[0.08em] text-slate-500 shadow-sm">
                Tap a stop to explore
              </div>

              <div className="hidden text-[12px] text-slate-400 md:block rounded-full border border-white/70 bg-white/80 px-3 py-1.5 text-[12px] font-medium tracking-[0.08em] text-slate-500 shadow-sm">
                Scroll
              </div>
            </div>

            <div className="hide-scroll-bar overflow-x-auto md:overflow-visible">
              <div className="relative flex min-w-[920px]  items-start gap-10 px-4 py-10 md:min-w-0 md:justify-between md:gap-6 md:px-2">
                <div className="absolute left-8 right-8 top-[2.2rem] -z-10 h-[4px]  rounded-full bg-gradient-to-r from-emerald-200 via-sky-300 to-indigo-300 opacity-80 md:left-[6%] md:right-[6%]" />

                {schools.map((school, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <button
                      key={school.id}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className="group relative flex w-[116px] shrink-0 flex-col items-center text-center outline-none md:w-[110px]"
                      style={{ transform: `translateY(${school.yOffset * 0.65}px)` }}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="traveler-node"
                          className="absolute -top-14 z-30 drop-shadow-2xl"
                          initial={{ opacity: 0, scale: 0.85 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ type: 'spring', stiffness: 170, damping: 16 }}
                        >
                          <motion.div
                            animate={{ y: [0, -8, 0], rotate: [0, 4, -4, 0] }}
                            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                            className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-sky-500 shadow-[0_0_30px_rgba(14,165,233,0.65)]"
                          >
                            <Rocket size={18} className="-rotate-45 text-white rotate-20" />
                            <img src="/pic5.png" alt="" className='sm:w-10 sm:h-10  ' />
                          </motion.div>
                        </motion.div>
                      )}

                      <motion.div
                        whileHover={{ scale: 1.08, y: -2 }}
                        className={`relative z-20 mb-4 h-8 w-8 rounded-full border-[3px] shadow-sm transition-all duration-300 ${isActive
                          ? 'border-white bg-blue-400 shadow-[0_0_0_6px_rgba(251,191,36,0.18)]'
                          : 'border-slate-300 bg-white group-hover:border-blue-200 group-hover:bg-blue-100'
                          }`}
                      />

                      <div
                        className={`relative mt-2 flex w-full flex-col items-center justify-center rounded-[1.25rem] border px-4 py-3 text-center backdrop-blur-md transition-all duration-400 ease-out ${isActive
                          ? 'scale-105 border-white/80 bg-white/95 shadow-[0_12px_40px_-10px_rgba(14,165,233,0.25)]'
                          : 'border-transparent bg-transparent group-hover:-translate-y-1 group-hover:border-white/60 group-hover:bg-white/50 group-hover:shadow-sm'
                          }`}
                      >
                        <h3
                          className={`line-clamp-2 text-[13px] font-extrabold leading-snug tracking-tight transition-colors duration-300 ${isActive ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-800'
                            }`}
                        >
                          {school.name}
                        </h3>
                        <p
                          className={`mt-1.5 text-[10px] font-black uppercase tracking-[0.25em] transition-colors duration-300 ${isActive ? 'text-sky-600 drop-shadow-sm' : 'text-slate-400 group-hover:text-amber-500'
                            }`}
                        >
                          {school.period}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-4xl px-2 ">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 150, damping: 20 }}
              className="torn-card relative flex flex-col gap-6 overflow-hidden border border-[#e9e1d6] bg-[#fffdf8]/92 p-4 shadow-[0_24px_55px_rgba(0,0,0,0.12)] backdrop-blur-xl md:flex-row md:gap-8 md:p-5"
            >
              <div className="w-full shrink-0 md:w-[36%]">
                <div className="rounded-[1.3rem] bg-white p-2 shadow-lg transition-transform duration-300 hover:rotate-0 md:-rotate-2">
                  <div className="relative h-44 overflow-hidden rounded-[1rem] md:h-60">
                    <motion.img
                      src={schools[activeIndex].image}
                      alt={schools[activeIndex].name}
                      className="h-full w-full object-cover"
                      initial={{ scale: 1.15 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className={`absolute inset-0 
                      bg-gradient-to-t ${schools[activeIndex].color} opacity-10 mix-blend-multiply`} />
                  </div>
                </div>
              </div>

              <div className="flex h-full flex-col justify-center py-4 md:pr-8">
                {/* TOP ROW: Icon & Pill */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  className="mb-6 flex items-center gap-4"
                >
                  {/* ICON BOX */}
                  <div
                    className={`relative flex h-12 w-12 items-center justify-center rounded-[1.25rem] 
    bg-gradient-to-br text-white shadow-[0_8px_20px_-6px_currentColor] 
    ring-1 ring-white/60 ${schools[activeIndex].color}`}
                  >
                    <div className="absolute inset-0 rounded-[1.25rem] bg-gradient-to-b from-white/30 to-transparent opacity-50 mix-blend-overlay" />
                    <ActiveIcon size={22} strokeWidth={2.5} className="relative z-10 drop-shadow-md" />
                  </div>

                  {/* DESTINATION PILL — SAME HEIGHT */}
                  <div
                    className="inline-flex h-12 items-center gap-2 rounded-full 
    border border-amber-400 
    bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400
    px-6 
    text-[13px] font-extrabold tracking-[0.25em]
    text-amber-900 shadow-md shadow-amber-300/50"
                  >
                    <StarIcon size={16} strokeWidth={2.5} fill="currentColor" className="text-amber-900" />
                    Destination {activeIndex + 1}
                  </div>
                </motion.div>

                {/* TITLE */}
                <motion.h3
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 text-2xl sm:text-4xl font-black tracking-tight"
                >
                  {schools[activeIndex].name}
                </motion.h3>


                {/* SUBTITLE BADGE */}
                {schools[activeIndex].full_name && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.16, ease: [0.23, 1, 0.32, 1] }}
                    className="mb-5 "
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700 text-xl font-black tracking-tight drop-shadow-sm">
                      {schools[activeIndex].full_name}
                    </span>
                  </motion.div>
                )}

                {/* DESCRIPTION */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.24, ease: [0.23, 1, 0.32, 1] }}
                  className="max-w-[54ch] text-[14px] pb-10 mt-4 font-medium leading-[1.8] text-slate-600 md:text-[15.5px]"
                >
                  {schools[activeIndex].details}
                </motion.p>
              </div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/45 via-transparent to-black/5 mix-blend-overlay" />
              <div className="paper-tear-top" />
              <div className="paper-tear-bottom" />
            </motion.div>
          </AnimatePresence>
        </div >
        <img src="/pic1.png" alt="" className="absolute -bottom-0 left-40 sm:left-0 sm:bottom-0 sm:w-40 w-14 h-14 h-20 object-contain animate-floating transition-transform duration-700 ease-in" />
      </div >

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .hide-scroll-bar::-webkit-scrollbar { display: none; }
            .hide-scroll-bar { -ms-overflow-style: none; scrollbar-width: none; }

            .torn-card {
              border-radius: 28px;
            }

            .paper-tear-top,
            .paper-tear-bottom {
              position: absolute;
              left: 0;
              width: 100%;
              height: 16px;
              background: #fffdf8;
              z-index: 4;
            }

            .paper-tear-top {
              top: 0;
              clip-path: polygon(0 55%, 5% 30%, 11% 68%, 18% 36%, 26% 70%, 35% 34%, 44% 72%, 53% 38%, 62% 74%, 71% 40%, 80% 71%, 88% 36%, 94% 66%, 100% 48%, 100% 0, 0 0);
              opacity: 0.92;
            }

            .paper-tear-bottom {
              bottom: 0;
              clip-path: polygon(0 100%, 0 46%, 6% 68%, 14% 31%, 22% 63%, 31% 35%, 39% 70%, 48% 29%, 57% 66%, 66% 34%, 75% 68%, 84% 37%, 92% 72%, 100% 44%, 100% 100%);
              opacity: 0.9;
            }
          `,
        }}
      />
    </section >
  );
}