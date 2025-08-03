import { useSelector } from "react-redux";
import Header from "../Components/Master Layout/header";
import styles from "./master.module.css";
export default function MasterLayout(props) {
  const selectedTheme = useSelector(
    (state) => state?.themeSelector?.selectedTheme
  );
  return (
    <div className={styles[selectedTheme]}>
      <Header />
      <div>{props.children}</div>
    </div>
  );
}
