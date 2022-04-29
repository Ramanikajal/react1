import logo from './logo.svg';
import './App.css';

function App() {
  // let arr=[10,20,30,40,50,60];
  // console.log(arr[2]);

// let  obj={
//   id:20,
//   age:30,
//   per:40,

// }
// console.log(obj.per);

let arr=[10,20,30,40,50,60];
//  arr.push(50);
// arr.unshift(99,56);
// arr.pop()
// arr.shift()
// arr.splice(3,0,78);
// arr.splice(3,1)

//  console.log(arr. toString());
// let res=arr.some((a)=>a>100);
// let res=arr.some((a)=> a > 10);
// let res= arr.find((a)=>a>10);
let res = Array.isArray(arr);
// let  no = [16, 25, 36];
// let results = no.map(Math.sqrt);
// console.log(results);
console.log(res);

arr.map((a,i)=> console.log(a));

  function intro(){
    console.log("ramani");
  }
  intro();
  
  let name =() =>{
    console.log("ramani kajal");
  }
  name()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React home
        </a>
      </header>
    </div>
  );
}

export default App;
