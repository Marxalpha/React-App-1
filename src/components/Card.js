import React from 'react';
import './card.css';

class Card extends React.Component {
	render(){
	return(
		<div className='card dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img src={`https://robohash.org/${this.props.id}`} alt="Robot" />
			<div>
				<h2 className='tc'>{this.props.name}</h2>
				<p className='tc'>{this.props.email}</p>
			</div>
		</div>
		);
	}
}
export default Card;