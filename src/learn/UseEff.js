import React, { useState, useEffect } from "react";

export default function UseEff() {
	const [count, setCount] = useState(0);
	const [test, setTest] = useState("test");

	// 1. 沒有第二個參數，每次都執行
	useEffect(() => {
		console.log("我每次都會執行");
	});

	// 2. 第二個參數是空陣列，只會執行第一次
	useEffect(() => {
		console.log("我只會執行第一次");
	}, []);

	// 3. 第二個參數不是空陣列，這個參數的狀態有被改變時就會執行
	useEffect(() => {
		console.log("test 被改變我就執行");
	}, [test]);
	return (
		<div>
			<h3>Hook UseEffect</h3>
			<p>{count}</p>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Click
			</button>
			<br />
			<p>{test}</p>
			<button
				onClick={() => {
					setTest(test.toUpperCase());
				}}
			>
				Test
			</button>
		</div>
	);
}
