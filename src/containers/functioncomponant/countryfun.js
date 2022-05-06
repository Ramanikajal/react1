import React, { useState } from 'react';

function Countryfun(props) {
    const[country,setcountry]=useState('india');
    const[Gdp,setGdp] =useState(0);
    const changeCountry =() =>{
        setcountry('uk')
    }
    return (
        <div>
            <p> Country[functionbased component:{country}</p>
            <button onClick ={ () => changeCountry()}>change</button> 
            <p>Gdp:{Gdp}</p>
            <button onClick ={() => setGdp(5.5)}>changeGdp</button>
        </div>
    );
}

export default Countryfun;