import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import styles from './Contact.module.css';

const contactSchema = z.object({
  name: z.string().min(2, "Name required"),
  projectType: z.string().min(2, "Project details required"),
  email: z.string().email("Invalid email address"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log("Form data submitted:", data);
    // Simulate successful transmission
    setIsSuccess(true);
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNumber}>[03 // INITIATE_CONTACT ]</span>
      </div>

      <div className={styles.formContainer}>
        {isSuccess ? (
          <div className={styles.successMessage}>
            [ TRANSMISSION RECEIVED. ALL SYSTEMS GO. ]
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.madLibs}>
              HI DEVSYNC, MY NAME IS
              <span className={styles.inputWrapper}>
                <input 
                  type="text" 
                  className={`${styles.brutalistInput} ${errors.name ? styles.inputError : ''}`} 
                  placeholder="[Name Input]" 
                  aria-label="Your Name"
                  {...register("name")}
                />
                {errors.name && <span className={styles.errorMessage}>{errors.name.message}</span>}
              </span>
              <br /><br />
              AND I'M LOOKING TO BUILD A
              <span className={styles.inputWrapper}>
                <input 
                  type="text" 
                  className={`${styles.brutalistInput} ${errors.projectType ? styles.inputError : ''}`} 
                  placeholder="[Project Type]" 
                  aria-label="Project Type"
                  {...register("projectType")}
                />
                {errors.projectType && <span className={styles.errorMessage}>{errors.projectType.message}</span>}
              </span>
              <br /><br />
              REACH ME AT
              <span className={styles.inputWrapper}>
                <input 
                  type="email" 
                  className={`${styles.brutalistInput} ${errors.email ? styles.inputError : ''}`} 
                  placeholder="[Email Input]" 
                  aria-label="Your Email"
                  {...register("email")}
                />
                {errors.email && <span className={styles.errorMessage}>{errors.email.message}</span>}
              </span>
            </div>
            
            <div className={styles.actionContainer}>
              <button type="submit" className={styles.transmitBtn}>[ TRANSMIT SIGNAL -&gt; ]</button>
            </div>
          </form>
        )}
      </div>

      <footer className={styles.footer}>
        <div className={styles.divider}></div>
        <p className={styles.copyright}>(c) 2026 DevSync. All systems operational.</p>
      </footer>
    </section>
  );
};
