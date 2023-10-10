import React from 'react'
import {useEffect,useState} from "react"
import {db} from "../conigFirebase"
import { collection, addDoc,deleteDoc,doc, onSnapshot ,orderBy} from "firebase/firestore"; 
function Transaction() {

    const [transactions,settransactions]=useState([]);


    useEffect(()=>{
    const unsub = onSnapshot(collection(db, "transactions"),orderBy('at', 'asc'), (snapshot) => {
        const transactiondata=snapshot.docs.map((doc)=>{
          // ...doc.data() se pura doc object with its field  get copied to blog data
          return {
        //... copies doc data to transaction data
            ...doc.data()
          }
        }) 
         settransactions(transactiondata);
      });
    },[])

    console.log( transactions)


  return (
    <>
    <div>Transaction History</div>
    <div>

    <table>
<tr>
        <th className="hello">Serial No.</th>
        <th>Sender</th>
        <th>Receiver</th>
        <th>Amount</th>
        <th>At Time</th>
    </tr>
    {transactions.map((transaction,index)=>(
        <tr>
            <td>{index+1}</td>
            <td>{transaction.sender}</td>
            <td>{transaction.receiver}</td>
            <td>{transaction.amount}</td>
            <td>{new Date(transaction.at.seconds * 1000).toLocaleString()}</td>
        </tr>
    )
    )}
    
    
</table>




    </div>
    
</>
  )
}

export default Transaction