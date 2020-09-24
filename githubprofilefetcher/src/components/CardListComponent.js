import Card from './CardComponent';
import React from 'react';

const CardList = (props) => (
	<div>
  	{props.profiles.map(profile => <Card {...profile}/>)}
	</div>
);

export default CardList;