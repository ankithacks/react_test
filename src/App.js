import { useState } from "react"

function App() {
  // react hooks--> created using useState
  let [counter, setCounter]= useState(15)
  // const username="github"
  // let counter=5

  const addValue=()=>{
    counter=counter+1
    if(counter>20){
      return
    }
    else{
      setCounter(counter)
    }
  }
  const decreaseValue=()=>{
    counter=counter-1
    if(counter<0){
      console.log("cannot go less than 0")
    }
    else{
      setCounter(counter)
    }
  }
  return (
    <div className="App">
      {/* <h1>the entered username is:- {username}</h1> */}
      {/* the above line of code is the syntax to inject a variable in react */}
      <h1>the current value is {counter}</h1>
      <button onClick={addValue}>Add Value {counter}</button>
      <br/>
      <button onClick={decreaseValue}>Remove Value {counter}</button>
    </div>
  );
}

export default App;
