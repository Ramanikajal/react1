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
  data.map((value, index) => console.log(value.id, value.name));
  console.log(data);
  let filterdata=data.filter((v,index)=>v.expiry >= 2022);
  console.log(filterdata);
  let ans=filterdata.reduce((acc,d,i)=>acc=d,price,0);
  console.log(ans);

  // Filter
  return (
    <>
      <table> 
        <th>
          <td>id</td>
          <td>name</td>
        </th>

      {
        filterdata.map((value, inex) => {
          return (
            <tr>
              <td> {value.id}</td>
              <td> {value.name}</td>
            </tr>
          )
        })
      }
    </table>
  </>
);
 }

export default App;
