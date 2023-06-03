import { InputProps } from './input.props';
import styles from './styles.module.scss';

export const InputComponent = ({ type, name, placeholder }: InputProps) => {
   return <input className={styles.input} type={type} name={name} placeholder={placeholder} />;
};
