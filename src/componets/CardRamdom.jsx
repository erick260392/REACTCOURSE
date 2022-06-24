import React from 'react';
import { useState } from 'react'
import Users from '../Users.json'


const CardRamdom = () => {

    const [Index, setIndex] = useState(0)
    const [Paint, setPaint] = useState(0)
    
    
    const {title,first,last}= Users[Index].name
    const {large}=Users[Index].picture
    const {email,phone} =Users[Index]
    const {city,state}= Users[Index].location
    
    const Colors = ["#845EC2","#D65DB1","#FF6F91","#FF9671","#FFC75F","#F9F871"]

 let NumberRamdom = Math.floor(Math.random()*Users.length)
 let ColorRamdom = Math.floor(Math.random()*Colors.length)

 console.log(ColorRamdom);


 document.body.style= `background:${Colors[Paint]}`
    return (
        

    
 <div className="card"   >

<h1>{title} {first} {last}</h1>
<img src= {large} alt="" />

<div className="text">

<i className="fa-solid fa-envelope"> </i> <h3>{email}</h3> 
<br />
<i className="fa-solid fa-phone"></i> <h3>{phone} </h3>
<br />
<i className="fa-solid fa-location-dot"> </i> <h3>{city}, {state} </h3> 
</div>


<button onClick={()=>{setIndex(NumberRamdom)
setPaint(ColorRamdom)}} ><i className="fa-solid fa-shuffle"> </i></button>

</div>


    
            
        
    );
};

export default CardRamdom;