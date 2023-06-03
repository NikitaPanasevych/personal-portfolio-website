import SkillCard from '@/app/UI/skillCard';
import styles from './styles.module.scss';
import { skillData } from '@/app/data/skillData';

export default function About() {
   return (
      <div className={styles.about}>
         <h2 className={styles.about__title}>Technologies i use</h2>
         <div className={styles.about__container}>
            {skillData.map((skill, index) => {
               return <SkillCard key={index} title={skill.title} />;
            })}
         </div>
      </div>
   );
}
