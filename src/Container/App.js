import React ,{ Component } from 'react';
import CardList from '../Components/CardList';
import Searchbox from '../Components/Searchbox'
import Scroll from '../Components/Scroll'
import './App.css'

class App extends Component {
    constructor(){
        super()
        this.state = {//this robots and searchfield can change because they are state and state can change but props do not change.
            robots : [ ],
            searchfield: ' '
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>  response.json())
            .then(users => this.setState({ robots: users }));
        
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    
    }
    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.robots.length === 0) {
           return <h1>LOADING...</h1>
        } else { 
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <Searchbox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={ filteredRobots }/>
                    </Scroll>
                </div>
            );
        }
        
    }
}
export default App;