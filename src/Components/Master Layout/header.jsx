import { useDispatch, useSelector } from "react-redux";
import { switchTheme } from "../../Redux/themeSlice";
import styles from "./header.module.css";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedTheme = useSelector(
    (state) => state?.themeSelector?.selectedTheme
  );

  return (
    <div className={`${styles[selectedTheme]} ${styles.headerContainer}`}>
      <h1>Theme Switcher</h1>
      <div className={styles.navigation}>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/about")}>About</button>
        <button onClick={() => navigate("/contact")}>Contact</button>
        <select
          onChange={(e) => dispatch(switchTheme(e.target.value))}
          value={selectedTheme}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="colorful">Colorful</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
