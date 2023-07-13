import React from "react";
import Link from "next/link";
import styles from "./nav.module.css";

const NavBar = () => {
	return (
		<>
			<div className={styles.container}>
				<ul id="menu" className={styles.ul}>
					<li className={styles.ul}>
						<Link href="/" className={styles.link}>
							Home
						</Link>
					</li>
					<li className={styles.ul}>
						<Link href="/chat" className={styles.link}>
							Chat
						</Link>
					</li>
					<li className={styles.ul}>
						<Link href="/" className={styles.link}>
							Import
						</Link>
					</li>
					<li className={styles.ul}>
						<Link href="/" className={styles.link}>
							Register
						</Link>
					</li>
				</ul>
				<li className={`${styles.ul} ${styles.right}`}>
					<button onClick={"/"} className={styles.contact_us_btn}>
						Contact Us
					</button>
				</li>
			</div>
		</>
	);
};

export default NavBar;
