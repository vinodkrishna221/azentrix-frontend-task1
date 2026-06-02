import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
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
    <section className={styles.contactSection} id="contact">
      <div className={styles.sectionHeader}>
        <span className={styles.sectionNumber}>[ 03 // INITIATE_CONTACT ]</span>
      </div>

      <div className={styles.gridContainer}>
        {/* Left Column */}
        <div className={styles.infoColumn}>
          <h2 className={styles.title}>
            Let's<br />
            <span className={styles.accentText}>Build_</span>
          </h2>
          <p className={styles.description}>
            Have a project in mind or just want to connect? Send me a signal and let's create something exceptional together.
          </p>

          <div className={styles.contactMethods}>
            <div className={styles.methodItem}>
              <div className={styles.iconBox}>
                <Mail className={styles.icon} />
              </div>
              <div className={styles.methodContent}>
                <span className={styles.methodLabel}>EMAIL</span>
                <span className={styles.methodValue}>hello@devsync.dev</span>
              </div>
            </div>
            
            <div className={styles.methodItem}>
              <div className={styles.iconBox}>
                <MapPin className={styles.icon} />
              </div>
              <div className={styles.methodContent}>
                <span className={styles.methodLabel}>LOCATION</span>
                <span className={styles.methodValue}>Remote &bull; Worldwide</span>
              </div>
            </div>

            <div className={styles.methodItem}>
              <div className={styles.iconBox}>
                <Clock className={styles.icon} />
              </div>
              <div className={styles.methodContent}>
                <span className={styles.methodLabel}>RESPONSE TIME</span>
                <span className={styles.methodValue}>Within 24 hours</span>
              </div>
            </div>
          </div>

          <div className={styles.availabilityBox}>
            <div className={styles.availabilityHeader}>
              <span className={styles.pulseDot}></span>
              <span className={styles.availabilityLabel}>// Availability Status</span>
            </div>
            <p className={styles.availabilityText}>Open for new opportunities</p>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className={styles.formColumn}>
          <div className={styles.formCard}>
            {isSuccess ? (
              <div className={styles.successMessage}>
                [ TRANSMISSION RECEIVED. ALL SYSTEMS GO. ]
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name" className={styles.label}>HI DEVSYNC, MY NAME IS</label>
                  <div className={styles.inputWrapper}>
                    <input 
                      id="name"
                      type="text" 
                      className={`${styles.input} ${errors.name ? styles.inputError : ''}`} 
                      placeholder="Your Name" 
                      {...register("name")}
                    />
                    {errors.name && <span className={styles.errorMessage}>{errors.name.message}</span>}
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="projectType" className={styles.label}>AND I'M LOOKING TO BUILD A</label>
                  <div className={styles.inputWrapper}>
                    <input 
                      id="projectType"
                      type="text" 
                      className={`${styles.input} ${errors.projectType ? styles.inputError : ''}`} 
                      placeholder="Project Type" 
                      {...register("projectType")}
                    />
                    {errors.projectType && <span className={styles.errorMessage}>{errors.projectType.message}</span>}
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="email" className={styles.label}>REACH ME AT</label>
                  <div className={styles.inputWrapper}>
                    <input 
                      id="email"
                      type="email" 
                      className={`${styles.input} ${errors.email ? styles.inputError : ''}`} 
                      placeholder="your.email@example.com" 
                      {...register("email")}
                    />
                    {errors.email && <span className={styles.errorMessage}>{errors.email.message}</span>}
                  </div>
                </div>
                
                <button type="submit" className={styles.submitBtn}>
                  <span className={styles.btnIconLeft}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 11a9 9 0 0 1 9 9" />
                      <path d="M4 4a16 16 0 0 1 16 16" />
                      <circle cx="5" cy="19" r="1" />
                    </svg>
                  </span>
                  <span>TRANSMIT SIGNAL</span>
                  <ArrowRight size={20} className={styles.btnIconRight} />
                </button>
              </form>
            )}

            <div className={styles.formFooter}>
              <p className={styles.footerMsg}>
                <span className={styles.accentText}>//</span> Thanks for reaching out! Let's build the future.
              </p>
              <p className={styles.copyright}>
                (c) 2026 <span className={styles.accentText}>DevSync</span>. All systems operational.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
