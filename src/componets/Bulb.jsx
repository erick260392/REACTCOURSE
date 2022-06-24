import React from 'react';


const Bulb = ({State,StateGlobal }) => {



// const [Turn, setTurn] = useState(true)


    return (
        <div>
            <div className="bulb" style={{background: 
            
            StateGlobal ? "#F9F871" :   "#D5CABD" }}>
                
            </div>
            
           <button onClick={State} >ON/OFF</button>
        </div>
    );
};

export default Bulb;