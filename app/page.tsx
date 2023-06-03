'use client';

import { useEffect, useState } from 'react';
import About from './components/about';
import Contact from './components/contact';
import HomeComponent from './components/home';
import Loader from './components/loader';
import Portfolio from './components/portfolio';
import { motion, useScroll } from 'framer-motion';

export default function Home() {
   const [loading, setLoading] = useState(true);
   const { scrollYProgress } = useScroll();

   useEffect(() => {
      setTimeout(() => setLoading(false), 2000);
   }, []);

   return (
      <main className="main">
         <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
         {loading && <Loader />}
         <HomeComponent />
         <About />
         <Portfolio />
         <Contact />
      </main>
   );
}
