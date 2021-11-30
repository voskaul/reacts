import React from "react";

export default function User(e) {
	return (
		<div>
			<span>{e.user.name.first}</span>
			<br />
			<span>{e.user.name.last}</span>
			<div>
				<img src={e.user.picture.thumbnail} alt={e.user.name.first} />
			</div>
		</div>
	);
}

/*

*/
