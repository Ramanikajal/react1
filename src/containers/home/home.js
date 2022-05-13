import React from 'react';

function Home({data}) {
    return (
        <>
        <center>
        <table border="1">
            <tr>
                <td> Id</td>
                <td> Name</td>
            </tr>
        {data.map((d, i) => {
            return(
               <tr>
                 <td>{d.id}</td>
                 <td>{d.name}</td>
               </tr>
            )
        })}
        </table></center>
       </>
    );
}
export default Home;