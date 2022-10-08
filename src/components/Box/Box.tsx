import React from "react";
import styles from "./Box.module.css";

interface BoxProps {
	value: string;
	onClick: () => void;
}

function Box({ value, onClick }: BoxProps) {
	return (
		<button onClick={onClick} className={styles.box}>
			{value}
		</button>
	);
}

export default Box;
