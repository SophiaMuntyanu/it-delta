import { useRouter } from "next/router";
import Link from "next/link";

// Styles
import styles from "../../styles/navbar.module.scss";
import Logo from "../Logo";
const navigation = [
  { id: 1, title: "Main page", path: "/" },
  { id: 2, title: "Users page", path: "/users" },
];

const Navbar = () => {
  const { pathname } = useRouter();
  return (
    <div className={styles.navbar}>
      <Logo />
      <nav className={styles.navbar__list}>
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path}>
            <a className={pathname === path ? styles.active : null}>{title}</a>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
