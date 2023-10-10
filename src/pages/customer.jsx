import React from 'react'
import "./customer.css"
import { useEffect,useState } from 'react';
import {db} from "../conigFirebase"
import { collection, addDoc,deleteDoc,doc, onSnapshot } from "firebase/firestore"; 

function Customer() {
const [customers,setcustomers]=useState([]);





//One time fetch can be done like this
// const data = collection(database, 'customers');

// const [done, setDone] = useState([])

// const getCustomers = async () => {
//   const res = await getDocs(data);
//   const done = res.docs.map((item) => {
//     return { ...item.data() }
//   });
  
//   setDone(done)
// }

//but we use real time fetching which fetch evrytime data changes

useEffect(()=>{
const unsub = onSnapshot(collection(db, "customers"), (snapshot) => {
    const customerdata=snapshot.docs.map((doc)=>{
      // ...doc.data() se pura doc object with its field  get copied to blog data
      return {
    //... copies doc data to customer data
        ...doc.data()
      }
    }) 
     setcustomers(customerdata);
  });
},[])
console.log( customers)

  return (
    <>
    <div className="customer-title">customer</div>
    <table>

    <tr>
            <th className="hello">Serial No.</th>
            <th>Customer Name</th>
            <th>Account no.</th>
            <th>Email Id</th>
            <th>Balance</th>
        </tr>
        {customers.map((customer,index)=>(
            <tr>
                <td>{index+1}</td>
                <td>{customer.name}</td>
                <td>{customer.accountno}</td>
                <td>{customer.email}</td>
                <td>{customer.balance}</td>
            </tr>
        )
        )}
        
        
    </table>
    </>
  )
}

export default Customer