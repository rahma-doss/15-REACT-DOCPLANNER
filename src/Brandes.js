import React from 'react'
const logo=['znanylekarz','doctoralia','miodottore','doktortakvimi','znamylekar']
const Brandes =()=>{
    return (
        <div className='brand'>
        <div className='We-are'>
          <p>We are a global <br/>company <br/> with local culture</p>
        </div>
        <div className='brands-items'>
        {logo.map((el,index)=> <p key={index} >{el}</p>)}
        </div>
        </div>
    )
}


export default Brandes
