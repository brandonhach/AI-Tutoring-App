import React from "react";
import styles from "./landing.module.css";
import SpinningCube from "../3D/SpinningCube";
import { Canvas } from "@react-three/fiber";

const Landing = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.container_left}>
					<h1>A personalized tutor, just for you.</h1>
					<p className={styles.description}>
						SmartTutor dynamically adapts the learning material to match your skill
						level. Whether you are a beginner or an advanced learner, SmartTutor
						introduces innovative tools you can use to fine-tune your learning
						experience.
					</p>
					<button className={styles.get_started_btn}>Get Started Now!</button>
				</div>
				<div className={styles.container_right}>
					<h1>SmartTutor.ai</h1>
					<Canvas style={{ height: "500px", width: "500px" }}>
						<ambientLight />
						<SpinningCube></SpinningCube>
					</Canvas>
				</div>
			</div>
		</>
	);
};

export default Landing;
