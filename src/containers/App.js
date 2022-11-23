
import './App.css';
import React from 'react';
import CardArray from '../components/CardArray';
import Sbox from '../components/Sbox';
import Scroll from '../components/Scroll';
import Particle from '../components/ParticleBg';
// import Particles from 'react-particles';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots:users}))
        
    }
    onschange = (event) => {
        this.setState({ searchfield: event.target.value })
        
    }
    render() {
        let f = this.state.robots.filter(robo => {
            return robo.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.robots===0)
        {
            return (
                <h1 className='tc'>Loading</h1>
                )
        }
        else{
            return (
            <div>
                <Particle className='p'/>
                <div className='tc'>
                    <h1 className=' ss f1 sbox'>RoboFriends</h1>
                    <Sbox searchChange={this.onschange}/>
                    <Scroll>
                        <CardArray robo={f}/>
                    </Scroll>
                </div>
            </div> 

            );
        }
    }
}

export default App;