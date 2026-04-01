import { Mail, Phone, Code } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-sky-100/10 py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-tight text-white mb-2">
            Dhananjai Pratap Singh
          </h2>
          <p className="text-slate-400 text-sm">
            Building the seamless integration of Web Apps & IoT.
          </p>
        </div>
        
        <div className="flex gap-4">
          <Link
            href="mailto:dhananjaips111@gmail.com"
            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-sky-500 hover:text-white transition-all hover:-translate-y-1"
            aria-label="Email"
          >
            <Mail size={18} />
          </Link>
          <Link
            href="tel:+916009950848"
            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-sky-500 hover:text-white transition-all hover:-translate-y-1"
            aria-label="Phone"
          >
            <Phone size={18} />
          </Link>
          <Link
            href="#"
            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-sky-500 hover:text-white transition-all hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </Link>
          <Link
            href="#"
            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-sky-500 hover:text-white transition-all hover:-translate-y-1"
            aria-label="LeetCode"
          >
            <Code size={18} />
          </Link>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-12 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Dhananjai Pratap Singh. All rights reserved.</p>
      </div>
    </footer>
  );
}
