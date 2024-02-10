import { useRef, useState, useCallback, useEffect } from "react";
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [character, setCharacter] = useState(false);
  const [Password, setPassword] = useState("");

  // Ref hook
  const passwordRef=useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllow) str += "0123456789";
    if (character) str += "!@#$%^&*()_+~{}[]:;'><,.?/";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllow, character, setPassword]);

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  useEffect(()=>{
    passwordGenerator()
  }, [length,numberAllow,character, passwordGenerator])
  
  
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md-rounded-lg px-4 my-8 text-orange-500 bg-gray-500">
        <h1 className="text-4xl text-center text-white my-6">Password generator</h1>
        <div className="flex shadow-rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-3">
            <input type="range" min={8} max={100} onChange={(e)=>{setLength(e.target.value)}} value={length} className="cursor-pointers"/>
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numberAllow} id="numberInput" onChange={()=>{setNumberAllow((prev)=>!prev)}}/>
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numberAllow} id="numberInput" onChange={()=>{setNumberAllow((prev)=>!prev)}}/>
            <label htmlFor="numberInput">Characters</label>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
