import SkillCard from '@/app/UI/skillCard';
import styles from './styles.module.scss';
import { skillData } from '@/app/data/skillData';
import { motion } from 'framer-motion';

export default function About() {
   return (
      <div className={styles.about}>
         <h2 className={styles.about__title}>Technologies i use</h2>
         <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25, ease: 'easeInOut' }}
            className={styles.about__container}
         >
            {skillData.map((skill, index) => {
               return <SkillCard key={index} title={skill.title} />;
            })}
         </motion.div>
      </div>
   );
}
