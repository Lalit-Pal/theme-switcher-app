import { useSelector } from "react-redux";
import MasterLayout from "../Layouts/masterLayout";
import styles from "./contact.module.css";

const Contact = () => {
  const selectedTheme = useSelector(
    (state) => state?.themeSelector?.selectedTheme
  );
  return (
    <MasterLayout>
      <div className={styles[selectedTheme]}>
        <div className={styles.contactContainer}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.description}>
            Have questions or suggestions? Reach out to us!
          </p>

          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                className={styles.textarea}
              />
            </div>

            <button type="submit" className={styles.button}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </MasterLayout>
  );
};

export default Contact;
