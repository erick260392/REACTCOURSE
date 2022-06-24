import React from 'react';
import { useState } from 'react';


const InputControl = () => {
    // let Isvisible = true
    
    const [IsVisible, setIsVisible] = useState(true)
  
    return (
        <div>
            <div className="card">
                
               <input type= {IsVisible ? "text" : "password"} />

                <button onClick={()=> setIsVisible(!IsVisible) } >mostrar/ocultar</button>
            </div>
        </div>
    );
};

export default InputControl;