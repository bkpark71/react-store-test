import React from 'react';
import './App.css';
import countStore from './CountStore';
import { observer } from 'mobx-react'; // 감시를 하는 관찰자로 등록

class App extends React.Component{
  // state={
  //   count : 0,
  // }

  // plus=()=>{
  //   this.setState((currentState) => {return {count:currentState.count+1}});
  // }

  // minus=()=>{
  //   this.setState((currentState) => {return {count:currentState.count-1}});
  // }

  handlePlus = () => {
    countStore.plus(5);
  }

  render() {
    return (
      <div className="App">
        <h1>number : {countStore.count}</h1>
        {/* <button onClick={countStore.plus}>+</button> */}
        <button onClick={this.handlePlus}>+</button>
        <button onClick={countStore.minus}>-</button> 
      {/* <button onClick={this.minus}>-</button> 
        jsx 주석처리하는 방법 */}
      </div>
    );
  }
}

export default observer(App); // 자기 자신을 감시자로 등록함.
