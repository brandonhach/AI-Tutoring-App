import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

export default function SpinningCube(props) {
	const mesh = useRef();
	const [hovered, setHovered] = useState(false);
	const [colorIndex, setColorIndex] = useState(0);
	const [color, setColor] = useState("#DDC27E"); // Default color

	// An array of colors to cycle through
	const colors = ["#22232B", "#F0F1EC", "#B83766", "#D18D5D", "#6C45B2", "#9F8393"];

	// Hook to start cycling colors when hovered
	useEffect(() => {
		let colorInterval;

		if (hovered) {
			colorInterval = setInterval(() => {
				setColorIndex((prevIndex) => {
					const newIndex = (prevIndex + 1) % colors.length;
					setColor(colors[newIndex]);
					return newIndex;
				});
			}, 650); // changes color by miliseconds
		} else {
			setColor("#DDC27E"); // Reset to default color when not hovered
		}

		return () => {
			// Clear the interval when the component is unmounted or when the hover state changes
			clearInterval(colorInterval);
		};
	}, [hovered]);

	useFrame((state, delta) => {
		mesh.current.rotation.x += 0.01;
		mesh.current.rotation.y += 0.01;
	});

	return (
		<mesh
			ref={mesh}
			onPointerOver={() => setHovered(true)}
			onPointerOut={() => setHovered(false)}>
			<boxGeometry args={[3, 3, 3]} />
			<meshStandardMaterial color={color} />
		</mesh>
	);
}

/**
 *                 <pointLight position={[10, 10, 10]} />
                <SpinningCube position={[-1.2, 0, 0]} />
 */
