import React from 'react';
import styles from './styles.module.scss';
import { motion } from 'framer-motion';

export default function Loader() {
   return (
      <div className={styles.loader}>
         <motion.div
            initial={{ height: '100%' }}
            animate={{ height: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
            className={styles.loader__element}
         ></motion.div>
      </div>
   );
}
