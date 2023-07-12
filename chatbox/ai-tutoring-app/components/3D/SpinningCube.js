import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function SpinningCube(props) {
	const mesh = useRef();
	useFrame((state, delta) => (mesh.current.rotation.x += 0.01));
	return (
		<mesh ref={mesh}>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={"orange"} />
		</mesh>
	);
}

/**
 *                 <pointLight position={[10, 10, 10]} />
                <SpinningCube position={[-1.2, 0, 0]} />
 */
