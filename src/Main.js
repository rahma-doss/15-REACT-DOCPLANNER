import React from 'react';
const array =[{logo:'https://www.docplanner.com/img/flag.png', title:'Leader in 10 countries' , text:'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile'}
,{logo:'https://www.docplanner.com/img/visits.png',title:'1.5 million appointments',text:'booked last month'},
{logo:'https://www.docplanner.com/img/patients.png',title:'30 million unique patients' , text:'visit us every month'},
{logo:'https://www.docplanner.com/img/doctors.png', title:'2 million active doctors',text:'trust in our solutions'}]

const Main=()=>{
    return (
        <div className='Main-section'>
        <div className='main'>
            <div className='main-header' >
            <h2 className="titre1" > The world's <br/> biggest healthcare platform</h2>
            <p> We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
            <div className='image-header'>
            <img className="backimg" src="https://www.docplanner.com/img/logo.png" />
            </div>
            </div>
            <div className='section-stats'>
                {array.map((el,index)=> <div className='stats'>
                    <img src={el.logo}  />
                    <h3>{el.title}</h3>
                    <p>{el.text}</p>
                     </div>)}

            </div>

        </div>
        </div>
    )
}

export default Main