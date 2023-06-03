import React from 'react';
import styles from './styles.module.scss';
import { projectsData } from '@/app/data/projectsData';
import ProjectCard from '@/app/UI/projectCard';
import { motion } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import SwiperCore, { Pagination, Navigation } from 'swiper';

SwiperCore.use([Pagination, Navigation]);

const Portfolio: React.FC = () => {
   return (
      <div className={styles.portfolio}>
         <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
            className={styles.portfolio__container}
         >
            <h2>Featured projects</h2>
            <p>
               Created as part of the learning process. The goal was not just to build web applications but to discover
               and learn new features, key concepts, and tools. Click on the project to see more.
            </p>

            <Swiper
               pagination={{
                  type: 'progressbar',
               }}
               navigation={true}
               className="PortfolioSwiper"
            >
               {projectsData.map((project, index) => (
                  <SwiperSlide key={index}>
                     <ProjectCard title={project.title} image={project.image} link={project.link} />
                  </SwiperSlide>
               ))}
            </Swiper>
         </motion.div>
      </div>
   );
};

export default Portfolio;
