import { useState } from "react"
import './index.css'
import Cards from "./components/Cards"

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

  let user={
    username: "github",
    password: 1234
  }
  return (
    <div className="App">
      {/* <h1>the entered username is:- {username}</h1> */}
      {/* the above line of code is the syntax to inject a variable in react */}
      <h1 className="text-3xl  bg-green-500 font-bold underline">the current value is {counter}</h1>
      <button onClick={addValue}>Add Value {counter}</button>
      <br/>
      <button onClick={decreaseValue}>Remove Value {counter}</button>
      <h1 className="bg-green-700">Tailwinf css</h1>
      {/* you can go to site of :- devui.io to get more of design codes */}
      <Cards name="github mountains"/>
      <Cards name="codeblock" someobj={user} para="lorem ipsumvgb vuvba;eur uva;eourn;g"/>
    </div>
  );
}

export default App;
