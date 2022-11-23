import React from 'react';

class Sbox extends React.Component
{
	render()
	{
		return(
			<input className="pa3 ba b--green bg-lightest-blue" 
			type="Search" 
			placeholder="Search" 
			onChange={this.props.searchChange}
			/>
			);
	}
}

export default Sbox;