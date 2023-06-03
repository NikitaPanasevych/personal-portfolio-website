import { SkillCardProps } from './skillCard.props';
import styles from './styles.module.scss';
import { FaReact } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { DiSass } from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { FaCss3 } from 'react-icons/fa';
import { SiFirebase } from 'react-icons/si';
import { SiAuth0 } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';

export default function SkillCard({ title }: SkillCardProps) {
   switch (title) {
      case 'React':
         var icon = <FaReact />;
         break;
      case 'Next.js':
         var icon = <TbBrandNextjs />;
         break;
      case 'SASS':
         var icon = <DiSass />;
         break;
      case 'TypeScript':
         var icon = <SiTypescript />;
         break;
      case 'JavaScript':
         var icon = <DiJavascript1 />;
         break;
      case 'HTML':
         var icon = <AiOutlineHtml5 />;
         break;
      case 'CSS':
         var icon = <FaCss3 />;
         break;
      case 'Firebase':
         var icon = <SiFirebase />;
         break;
      case 'NextAuth':
         var icon = <SiAuth0 />;
         break;
      case 'Tailwind CSS':
         var icon = <SiTailwindcss />;
         break;
      case 'MongoDB':
         var icon = <SiMongodb />;
         break;
      case 'Redux':
         var icon = <SiRedux />;
         break;
      default:
         var icon = <FaReact />;
   }

   return (
      <div className={styles.card}>
         <div className={styles.card__icon}>{icon}</div>
         <h3>{title}</h3>
      </div>
   );
}
