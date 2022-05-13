import React from 'react';

function Loding(Component) {
    return function withhome({isLoding,data}){
       if (isLoding)
       {
       return <p> Loding...</p>
       }
       else
       {
       return <Component data={data}/>
       }
    }
}

export default Loding;