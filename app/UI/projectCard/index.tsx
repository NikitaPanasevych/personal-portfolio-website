import Link from 'next/link';
import styles from './styles.module.scss';
import { ProjectCardProps } from './projectCard.props';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function ProjectCard({ title, image, link }: ProjectCardProps) {
   const router = useRouter();

   const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault();
      router.push(link);
   };

   return (
      <div className={styles.card} onClick={handleClick}>
         <div className={styles.card__image}>
            <img src={image} alt={title} />
         </div>
         <div className={styles.card__content}>
            <h3>{title}</h3>
         </div>
      </div>
   );
}
