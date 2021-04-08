import React from 'react';
import {UserProvider} from './provider/UserProvider.jsx'



import {Input_portfolio} from "./components/Input_portfolio.jsx"

const  App=()=> {
  return (
    <div>
      <h1>portfolio app</h1>
      <UserProvider>
         <Input_portfolio/>
      </UserProvider>
      
      
     
    </div>
  );
}

export default App;
