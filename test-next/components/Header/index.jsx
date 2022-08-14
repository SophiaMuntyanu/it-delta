// Styles
import styles from "../../styles/header.module.scss";
import Navbar from "../Navbar";

const Header = () => {
  return (
    <div className={styles.header}>
      <Navbar />
    </div>
  );
};

export default Header;
