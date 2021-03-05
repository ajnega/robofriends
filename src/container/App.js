import React, {Component} from 'react';
import SearchBox from '../component/SearchBox'
import Cardlist from '../component/Cardlist';
import Scrollar from '../component/Scrollar';
import ErrorBoundary from '../component/ErrorBoundary';
 
import './App.css'



class App extends Component {
	constructor(){
		super()
		this.state = {
			robots:[],
			searchfield:''

		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({robots:users}))
  }
	
	onSearchChange = (event) =>{
		this.setState({searchfield:event.target.value})
		
		
	}
	render (){
		const filterRobots= this.state.robots.filter(robots=>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
			})
		return (
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scrollar>
				<ErrorBoundary>
				<Cardlist robots={filterRobots}/>
				</ErrorBoundary>
				</Scrollar>
			</div>
			)
			 }
	 componentDidUnmount(){

	 };
}
export default App;