import React from "react";
import styles from "./about.module.css";

const About = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.container_left}>
					<h2>Dynamically Adapt Learning</h2>
					<p>
						As you engage with our platform, our intelligent algorithms analyze your
						performance, understanding your strengths, weaknesses, pace, and
						preferences.
					</p>
				</div>
				<div className={styles.container_mid}>
					<h2>Enhance Critical Thinking</h2>
					<p>
						SmartTutor introduces an innovative tool known as &apos;vagueness
						sliders&apos;. This unique feature fundamentally transforms the learning
						process by challenging the traditional notion of information clarity.
					</p>
				</div>
				<div className={styles.container_right}>
					<h2>Stimulate Cognitive Performance</h2>
					<p>
						SmartTutor stimulates your cognitive abilities, encouraging you to think
						critically, analyze information from different perspectives, and solve
						complex problems effectively.
					</p>
				</div>
			</div>
		</>
	);
};

export default About;
