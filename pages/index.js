import styles from "../styles/Home.module.css";
import NavBar from "../comps/layout/navBar/navBar";

export default function IndexPage() {
  return (
    <div className={styles.container}>
      <NavBar title="Title" />
    </div>
  );
}
