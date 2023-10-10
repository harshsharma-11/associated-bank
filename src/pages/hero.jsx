import React from 'react'
import custImg from "../static/images/customers.jpeg"
import transactImg from "../static/images/transaction.png"
import transferImg from "../static/images/transfer.png"
import heroImage from "../static/images/bank (1).png"
import "./hero.css"
import Service from "../bank-components/service"


function Hero() {
  return (
    <>
    <div className="about-bank">
<div className="left">
    <div className="bank-hero">THE ASSOCIATED BANK</div>
    <div className="bank-info">
        The associated bank is a world bank smallest body which has just 10  customers till now.From all over the world every 
        every billionaire tries to get their bank account open in sparks bank but maximum of them fails because our 
        customers are not those who have more money but those who have more love to donate
    </div>
</div>
<div className="right"><img alt="heroImage" src={heroImage}/></div>
    </div>

    <div className="bank-services">
       <div className="service-title"><h1>SERVICES</h1></div>
       <div className="cards"> 
<Service name="Customers" img={custImg} info="This is the list of all customers of this bank" butnTxt="View All Customers" link="customers" />
<Service name="Transactions" img={transactImg} info="This provides transaction history of all bank accounts " butnTxt="View Transaction " link="transaction-history"  />
<Service name="Transfer Money" img={transferImg}  info="Transfer money from your bank account to other "  butnTxt="Transfer Money" link="transfer"/>
</div>
    </div>

    </>
  )
}

export default Hero