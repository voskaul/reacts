import React, { useState } from "react";

export default function Buttons() {
	const [count, setCount] = useState(0);

	const increaseHandler = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<span>{count}</span>
			<button onClick={increaseHandler}>+++</button>
		</div>
	);
}
