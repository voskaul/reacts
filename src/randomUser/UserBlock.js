import React from "react";
import User from "./User";
//redux tool key
export default function UserBlock({ data }) {
	return (
		<>
			{data.map((item) => {
				return item.map((user, index) => {
					return <User key={index} user={user} />;
				});
			})}
		</>
	);
}
