import React from 'react'
import "./transfer.css"

import { collection, query, where,getDocs,updateDoc,doc,setDoc, addDoc } from "firebase/firestore";
import {db} from "../conigFirebase"

function transfer() {

const handleSubmit=async(e)=>{
  e.preventDefault();

const sender_accountno= parseInt(e.target.sender.value, 10);
const receiver_accountno = parseInt(e.target.receiver.value, 10);
const amount = parseInt(e.target.amount.value, 10);
console.log(receiver_accountno,amount);



const senderquery=query(collection(db,'customers'),where('accountno','==',sender_accountno));

///SENDER
let sender;
let senderquery_snapshot;
try {
   senderquery_snapshot = await getDocs(senderquery);
  if (senderquery_snapshot.empty) {
    return alert("Sender not found");
  }
   sender = senderquery_snapshot.docs[0].data();
   console.log(sender.accountno,sender.id);
} catch (error) {
  console.error("Error querying Firestore:", error);
  return alert("An error occurred while searching for the sender");
}


///RECEIVER
const receiverquery=query(collection(db,'customers'),where("accountno","==",receiver_accountno));
const receiverquery_snapshot=await getDocs(receiverquery);
if(receiverquery_snapshot.empty){
  return alert("Receiver not found");
}
const receiver=receiverquery_snapshot.docs[0].data();


//check sender and receiver can't be same
if(sender_accountno==receiver_accountno){
  return alert("Receiver and Sender can't be same");
}
//amount check
 else if(sender.balance<e.target.amount.value){
return alert("Amount insufficient")
}

else{
//to handle
const senderdocs=senderquery_snapshot.docs[0].ref;

const receiverdocs=receiverquery_snapshot.docs[0].ref;

 await updateDoc( senderdocs,{
   balance: sender.balance-amount,
 });
  await updateDoc(receiverdocs, {
   balance: receiver.balance+amount,
 });


//Add data to transaction
await addDoc(collection(db, "transactions"), {
 amount:amount,
 receiver:receiver.name,
 sender:sender.name,
 at:new Date(),
});



e.target.sender.value="";
e.target.receiver.value="";
e.target.amount.value="";
return alert ("transaction successfull")
}


 
}


  return (

    <>
    <div className="transfer-container">
    <div><h1>TRANSFER MONEY</h1></div>
    <form onSubmit={handleSubmit} >
        <input  type="number" name="sender" placeholder="Sender's Account No."/>
        <input  type="number" name="receiver" placeholder="Receiver's Account No."/>
        <input type="number"  name="amount" placeholder="Enter Amount"/>
        <button type="submit">Submit</button>
        </form>
    </div>
    </>
  )
}

export default transfer