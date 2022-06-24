import React from 'react';
import { useState } from 'react';






const Counter = () => {

let  [counter, setcounter] = useState(0)


    return (
        <div>
            <h1>CONTADOR</h1>

<h3>{counter}</h3>

<button onClick={()=> setcounter(counter ++ )} > increment</button>

<button onClick={()=> setcounter(counter--)} > decrement </button>
        </div>
    );
};

export default Counter;