import { useSelector } from "react-redux";
import MasterLayout from "../Layouts/masterLayout";
import styles from "./about.module.css";

const About = () => {
  const selectedTheme = useSelector(
    (state) => state?.themeSelector?.selectedTheme
  );
  return (
    <MasterLayout>
      <div className={`${styles[selectedTheme]}`}>
        <div className={`${styles.aboutContainer}`}>
          <h1 className={styles.title}>About Us</h1>
          <p className={styles.intro}>
            Welcome to our website! We are passionate about building scalable
            and user-friendly web applications.
          </p>

          <section className={styles.section}>
            <h2 className={styles.subheading}>Our Mission</h2>
            <p className={styles.text}>
              To deliver high-quality digital experiences with performance and
              accessibility in mind.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.subheading}>Our Team</h2>
            <ul className={styles.teamList}>
              <li>Lalit Pal - UI Developer</li>
              <li>John Doe - Backend Developer</li>
              <li>Jane Smith - UX Designer</li>
            </ul>
          </section>
        </div>
      </div>
    </MasterLayout>
  );
};

export default About;
