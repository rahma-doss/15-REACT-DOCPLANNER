import React from 'react';

const container = [{Title :'For patients', 
                  Subtitle:'Find a doctor, book a visit and solve any health-related doubt',
                  img:"https://www.docplanner.com/img/screen-marketplace@2x.png"},
                {Title :'For doctors', 
                Subtitle:'Save time managing visits and cut no-shows by half',
                img:"https://www.docplanner.com/img/screen-saas@2x.png"}]

const Services = () => {
    return (
          <div className='col-Services'>
        {container.map((el,index)=> <div className={el.Title==='For patients' ? 'Green-box' : 'bleu-box' }>
            
    <p className='for'>{el.Title}</p>
    <h2 className='find'>{el.Subtitle}</h2>
     {el.Title==='For patients' ? <select name="Country" className="button">
            <option value=""> CHOOSE COUNTRY</option>
            <option value="CHOOSE COUNTRY">CHOOSE COUNTRY</option>
            <option value="Brazil">Brazil</option>
            <option value="Tunisia">Tunisia</option>
        </select> : <div className='options'></div>}
       
        <img className='image-servive' src={el.img} />
        
        </div>)}
    </div>

    )
}


export default Services;