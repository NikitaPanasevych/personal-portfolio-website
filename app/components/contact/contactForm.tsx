import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ContactStyle from './styles.module.scss';
import styles from './styles.module.scss';
import { InputComponent } from '@/app/UI/input';
import MultiText from '@/app/UI/multiText';

export const ContactForm = () => {
   const form: any = useRef();

   const sendEmail = (e: any) => {
      e.preventDefault();

      emailjs.sendForm('service_m76qke3', 'template_a7yl92h', form.current, 'Z2LkdVRk3xqzomblY').then(
         (result: any) => {
            alert('Success');
         },
         (error: any) => {
            alert('Error');
         }
      );
   };

   return (
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
         <h2>Contact form</h2>
         <div className={styles.form__section}>
            <InputComponent type="text" placeholder="Sender name" name="from_name" />
         </div>
         <div className={styles.form__section}>
            <InputComponent type="text" placeholder="mail@example.com" name="from_email" />
         </div>
         <div className={styles.form__section}>
            <MultiText name="message" placeholder="Message" />
         </div>
         <button className={ContactStyle.button} type="submit">
            Message me
         </button>
      </form>
   );
};
