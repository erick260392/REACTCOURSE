import React from 'react';

const Card = ({title,item1,item2,item3,color}) => {
    return (
        <div>
            <div className='card'onClick={()=> alert(`${title}`)} style= {{background:color}} >
                <h1> {title} </h1>
                <ul>
                    <li>{item1} </li>
                    <li> {item2} </li>
                    <li> {item3} </li>
                </ul>
            </div>
        </div>
    );
};

export default Card;