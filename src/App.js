import React, { useEffect, useState } from 'react';
import Loding from './componts/Loding/Loding';
import Time from './containers/componetas/Time';
import Timefun from './containers/componetas/timefun';
import Home from './containers/home/home';
  let Lodingwithhome =Loding(Home);
function App() {
const [Loding,setLoding]=useState(false);
const[data,setdata]=useState([]);

let orgdata =[
  {id:101, name:'kajal'},
  {id:102,name:'krishna'}
];
 useEffect(
   () => {
     setLoding(true);
     setTimeout( () => {setLoding(false); setdata(orgdata)},2000);
   },
   [])
   return(
   <>
   <Lodingwithhome  isLoding={Loding} data ={data}/>
   </>
   );
}

export default App;