import { useState } from "react";
import Layout from "../Layout/Layout";
import styles from "./Game.module.css";
import { checkWinner } from "../../utils/checkWinner";

const empty = Array(9).fill("");

function Game() {
	const [layout, setLayout] = useState(empty);
	const [xIsNext, setXIsNext] = useState(true);
	const winner = checkWinner(layout);

	const handleClick = (i: number) => {
		const layoutState = [...layout];
		if (winner || layoutState[i]) return;
		layoutState[i] = xIsNext ? "X" : "O";
		setLayout(layoutState);
		setXIsNext(!xIsNext);
	};
	const handleRestart = () => {
		setLayout(empty);
		setXIsNext(true);
	};
	return (
		<>
			<Layout boxes={layout} onClick={handleClick} />
			<div className={styles.div}>
				<p className={styles.p}>
					{winner
						? winner === "tie"
							? "Tie"
							: `Winner: ${winner}`
						: `Next Player: ${xIsNext ? "X" : "O"}`}
				</p>
				<button onClick={handleRestart}>restart</button>
			</div>
		</>
	);
}

export default Game;
