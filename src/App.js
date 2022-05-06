import logo from './logo.svg';
import './App.css';

function App() {
  let data = [
    {
    //   id: 101,
    //   name: 'Abacavir',
    //   quantity: 25,
    //   price: 150,
    //   expiry: 2022,
    //   status: true
    // },
    // {
    //   id: 102,
    //   name: 'Eltrombopag',
    //   quantity: 90,
    //   price: 550,
    //   expiry: 2021,
    //   status: true
    // },
    // {

    //   id: 103,
    //   name: 'Meloxicam',
    //   quantity: 85,
    //   price: 450,
    //   expiry: 2025,
    //   status: false
    // },
    // {
    //   id: 104,
    //   name: 'Allopurinol',
    //   quantity: 50,
    //   price: 600,
    //   expiry: 2023,
    //   status: true
    // },
    // {
    //   id: 105,
    //   name: 'Phenytoin',
    //   quantity: 63,
    //   price: 250,
    //   expiry: 2021,
    //   status: false
    // }
    
      name: "amit",
      age: 35,
      salary: 40000,
      bonus: 1000,
      status: true
    },
    {
      name: "ajay",
      age: 25,
      salary: 38000,
      bonus: 2000,
      status: false
    },
    {
      name: "mayur",
      age: 23,
      salary: 50000,
      bonus: 500,
      status: true
    },
    {
      name: "jay",
      age: 29,
      salary: 35000,
      bonus: 600,
      status: true
    },
    {
      name: "raj",
      age: 33,
      salary: 22000,
      bonus: 2000,
      status: true
    },
  ];
   let filterdata =data.filter((v,i)=> v.status ===true);
   let totalExpense =filterdata.reduce((ass,v,i)=> ass+v.salary+v.bonus,0);
  // let filterdata=data.filter((v,index)=>v.expiry >= 2022);
  // console.log(filterdata);
  // let ans=filterdata.reduce((acc,d,i)=>acc+d.price,0);
  // console.log(ans);

  //  
  return (
    <>
     <table border = "1"> 
        <tr>
        
          <th>name</th>
          <th>age</th>
          <th>salary</th>
          <th>bonus</th>
          <th>total salary</th>
          <th>totalExpense</th>

        </tr>

      {
        filterdata.map(({name,age,salary,bonus}, index) => {
          let totalsalary=salary +bonus;
          return (
            <tr>
             
              <td> {name}</td>
              <td> {age}</td>
              <td>{salary}</td>
              <td> {bonus}</td>
              <td> {totalsalary}</td>
              {index === 0 ?<td rowspan={filterdata.length}>{totalExpense}</td>:null}
             </tr>
          )
        })
      }
    </table>
  </>
);
 }

export default App;
