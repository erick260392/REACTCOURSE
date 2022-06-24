import React from 'react';
import { useState } from 'react';








const Text = () => {

const [text, settext] = useState("Estado Inicial")



    return (
        <div>
              <h1>{text}</h1>

<button onClick={()=>{
    if (text==="Estado Inicial") {
        settext("El Estado Cambio")
        
    }else{
        settext("Estado Inicial")
    }
}}    >chace TEXT</button>




        </div>
    );
};

export default Text; 