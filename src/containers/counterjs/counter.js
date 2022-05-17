import React, { useState } from 'react';
import './counter.css';

function Counter(props) {
    
    let[counter,setcouter] = useState(0);

    return (
        <div>
            <center>
            <button onClick={()=> setcouter (counter>0 ? counter-1: counter)}>-</button>
            <span className='hi'>{counter}</span>
            <button onClick={()=> setcouter (counter<10? counter+1: counter)}>+</button>
            </center>
        </div>
    );
}

export default Counter;