import React from "react"; //,{useState}
import "./index.css";


//using function component
// const Counter =()=> {
//    const[increaseCount,setIncreaseCount]= useState(0)
//    const[decreaseCount,setDecreaseCount]= useState(100)  


//    return (
//     <div>
//       <h1>Simple Counter</h1>
//       <button onClick={()=>setIncreaseCount(increaseCount +1)}>Increase Count-{increaseCount} </button>
//       <button onClick={()=>setDecreaseCount(decreaseCount -1)}>Decrease Count-{decreaseCount} </button>
//     </div>
//    )
// }

// Using class component

class SimpleCounter extends React.Component{
  constructor(){
    super()
    this.state={
      count:0
    }
  }
  increaseCounter(){
    this.setState({
      count:this.state.count +1
    })
  }
  decreaseCounter(){
    this.setState({
      count:this.state.count -1
    })
  }

  render(){
    return (
      <div className="counter">
      <p>Count-     {this.state.count}</p>
      <button onClick ={() => {
        this.increaseCounter()
              }}> Increase </button>

      <button onClick ={() => {
        this.decreaseCounter()
      }}> Decrease </button>
      </div>
    )
  }
}

//export default Counter,
export default SimpleCounter