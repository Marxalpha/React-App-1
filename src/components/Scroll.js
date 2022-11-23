import React from 'react';

class Scroll extends React.Component
{
	render()
	{
		return(
			<div style={{overflowY: 'scroll',marginTop:'10px',border:'1px solid black',height:'76vh', padding:'10px'}}>
				{this.props.children}
			</div>
			);
	}
}

export default Scroll;