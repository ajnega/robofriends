import React from 'react';

import Card from './Card';

const Cardlist =({robots}) => {
	const cardComp = robots.map((user, i) =>{
		return <Card keys = {i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
		});
	return (
			<div>
					
					{cardComp}
				</div>
		);
}
export default Cardlist;