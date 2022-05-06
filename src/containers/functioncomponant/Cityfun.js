import React, {useState} from 'react';

function Cityfun(props) {
    const [City, setCity] = useState('surat');
    const [pizza, setpizza] = useState('pizza');
    const changeCity = () => {
        setCity('rajkot');
    }
        return (
            <div>
                <p> city[functionbased component:{City}</p>
                <button onClick={() => changeCity()}>change</button>
                <p>Gdp:{pizza}</p>
                <button onClick={() => setpizza('jambu')}>changeGdp</button>
            </div>
        );
    }

    export default Cityfun;