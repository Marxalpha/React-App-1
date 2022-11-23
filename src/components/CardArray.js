import React from 'react';
import Card from './Card';

class CardArray extends React.Component
{
	render(){
	return(
		<div>
			{
				this.props.robo.map((user,i)=> {
					return(
						<Card
							key={i} 
							id={this.props.robo[i].id} 
							name={this.props.robo[i].name} 
							email={this.props.robo[i].email}
						/>
						)
					}
				)
			}
		</div>
		);
	}
}

export default CardArray;