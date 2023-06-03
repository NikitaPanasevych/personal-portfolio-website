import React from 'react';
import { MultiTextProps } from './multitext.props';
import styles from './styles.module.scss';

export default function MultiText({ name, placeholder }: MultiTextProps) {
   return <textarea className={styles.textarea} name={name} placeholder={placeholder} />;
}
