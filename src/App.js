import React from 'react';
import PropTypes from "prop-types"

class App extends React.Component{
  state = {
    count: 0
  };
// setState를 하면 새 state로 refresh함 즉 render function을 다시 call함 
  add = () =>{
    this.setState(current => ({count: current.count+1}));
  }
  minus = () => {
    this.setState(current => ({count: current.count-1}))
  }

  componentDidMount(){
    console.log("Component rendered")
  }
  componentDidUpdate(){
    console.log("I just updated")
  }
  componentWillUnmount(){
    console.log("Component bye")
  }


  render(){
    return <div> 
    <h1>The number is {this.state.count}</h1>
    {/* React는 onClick Prop을 제공해줌 자바스크립트는 onclick  eventlister등등 이용 */}
    <button onClick={this.add}>Add</button>
    <button onClick={this.minus}>Minus</button>
    </div>
  }

}

export default App;
