/*import React from 'react';
import './App.css';
 
function App() {
  const [personName,setPersonName] = React.useState('');
 
  return (
    <div className="App">
      <h1>Hello {personName}</h1>
      <input type="text" onChange={(e) => setPersonName(e.target.value)}/>
    </div>
  );
}
 
export default App;
*/

import React from "react";
 
function Login(){
 
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(`logging in ${e.target[0].value}`);
 
        // do something else here
    }
 
    return (
        <form id="login-form" onSubmit={handleSubmit}>
            <input  type="email"
                id="email"
                placeholder="E-Mail Address"/>
            <input type="password"
                id="password"/>
            <button>Login</button>
        </form>
    );
}
