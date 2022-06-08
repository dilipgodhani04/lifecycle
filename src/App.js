
import './App.css';
import { Component } from 'react';
import User from './User';

class App extends Component{

  constructor(){
    super();
    this.state={color:'blue'}
    console.log('constructor');
  }
  componentDidMount(){
   this.setState({color:'pink'});  
   console.log('componentDidMount');
  }
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate');
    return true;
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('getSnapshotBeforeUpdate', prevState.color,prevProps.color);
    return false;
  }
  componentDidUpdate(){
    
    console.log('componentDidUpdate');
  }
  render(){
    console.log('render');
   return(<p>{this.state.color}<User/></p>);
 
  }
}
export default App;
