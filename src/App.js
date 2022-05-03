import logo from './logo.svg';
import './App.css';

function App() {
  let data = [
    {
      id: 101,
      name: 'Abacavir',
      quantity: 25,
      price: 150,
      expiry: 2022,
      status: true
    },
    {
      id: 102,
      name: 'Eltrombopag',
      quantity: 90,
      price: 550,
      expiry: 2021,
      status: true
    },
    {

      id: 103,
      name: 'Meloxicam',
      quantity: 85,
      price: 450,
      expiry: 2025,
      status: false
    },
    {
      id: 104,
      name: 'Allopurinol',
      quantity: 50,
      price: 600,
      expiry: 2023,
      status: true
    },
    {
      id: 105,
      name: 'Phenytoin',
      quantity: 63,
      price: 250,
      expiry: 2021,
      status: false
    }];
  
  let filterdata=data.filter((v,index)=>v.expiry >= 2022);
  console.log(filterdata);
  let ans=filterdata.reduce((acc,d,i)=>acc+d.price,0);
  console.log(ans);

  // Filter
  return (
    <>
      <table border = "1"> 
        <tr>
          <th>id</th>
          <th>name</th>
          <th>price</th>
          <th>total</th>
        </tr>

      {
        filterdata.map(({id,name,price}, index) => {
          return (
            <tr>
              <td> {id}</td>
              <td> {name}</td>
              <td>{price}</td>
              {index === 0 ?<td rowspan={filterdata.length}>{ans}</td>:null}
             </tr>
          )
        })
      }
    </table>
  </>
);
 }

export default App;
