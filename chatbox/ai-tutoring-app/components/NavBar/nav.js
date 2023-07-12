import styles from "../../src/pages/styles/nav.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
	return (
		<div className={styles.flexcontainer}>
			<Image src="/images/logo.png" alt="AI Tutoring App Logo" width={250} height={250} />
			<ul id="menu" className={styles.ul}>
				<li className={styles.ul}>
					<Link href="/">Home</Link>
				</li>
				<li className={styles.ul}>
					<Link href="/chat">Chat</Link>
				</li>
			</ul>
		</div>
	);
}
