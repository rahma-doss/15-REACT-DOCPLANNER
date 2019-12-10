import React from 'react';
const Arr =['About us', 'Career', 'Departements']

const Navbar = () =>
    <div className='Nav-bar'>
            <img src='https://www.docplanner.com/img/logo-default-group-en.svg?v=1' className="logo" />
         
            <div className='items'>
                {Arr.map((el,index) => <a key={index} href="#" className={el == "About us" ? "it1" : "it2"}> {el} </a> )}
            </div>
            
    </div>
 



  
    
export default Navbar;