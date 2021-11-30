import React, { useState, useEffect } from "react";
import UserBlock from "./UserBlock";

function UserData() {
	const [data, setData] = useState([]);
	const [count, setCount] = useState(0);

	const randomApiUrl = `https://randomuser.me/api/?page=${count}`;

	const fetchData = () => {
		fetch(randomApiUrl)
			.then((response) => response.json())
			.then((e) => {
				setData([...data, e.results]);
				console.log(data);
				increaseHandler();
			});
	};

	useEffect(() => {
		fetchData();
	}, []);

	const increaseHandler = () => {
		setCount(count + 1);
	};

	return (
		<>
			<button onClick={fetchData}>click</button>
			<span>{randomApiUrl}</span>
			<UserBlock data={data} />
		</>
	);
}

export default UserData;
