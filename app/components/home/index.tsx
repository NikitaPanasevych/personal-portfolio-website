import styles from './styles.module.scss';
import { motion } from 'framer-motion';

export interface IHome {
   handleClick(): void;
}

export default function HomeComponent(props: IHome) {
   const handleClick = () => {
      props.handleClick();
   };

   return (
      <>
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.25, delay: 2, ease: 'easeInOut' }}
            className={styles.home}
         >
            <div className={styles.home__container}>
               <h1 className={styles.home__title}>
                  <p>Hi!</p>
                  <p>
                     I am <strong>Nikita</strong>,
                  </p>
                  <p>Frontend developer</p>
               </h1>
               <p className={styles.home__container__paragraph}>
                  Student at Wroclaw.
                  <br />I am passionate about web development,
                  <br />
                  always open for new challenges
               </p>
               <button onClick={handleClick} className={styles.button}>
                  Contact me
               </button>
            </div>
         </motion.div>
      </>
   );
}
