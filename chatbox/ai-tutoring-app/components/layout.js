import styles from "../src/pages/styles/layout.module.css";

export default function Layout({ children }) {
	return <div className={styles.container}>{children}</div>;
}
