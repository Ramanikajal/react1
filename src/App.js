import logo from './logo.svg';
import './App.css';

function App() {
  let arr=[10,20,30,40,];
  console.log(arr);

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
