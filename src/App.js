import React from 'react';
import Navbar from './Navbar';
import Section from './Section';
import Services from './Services';
import Brandes from './Brandes';
import Main from './Main';
import Offices from './Offices';
import './App.css';

function App() {
  return (
    <div className="App">
       <Navbar />
       <Section />
       <Services/>
       <Brandes/>
       <Main/>
       <Offices/>
       
    </div>
   
   );
}
 
export default App;
