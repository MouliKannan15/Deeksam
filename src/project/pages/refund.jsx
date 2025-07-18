import React from "react";
import '../pages/term.css';



import BasicExample from "../navbar";
import Foot from '../footer';

function Refund (){
    return(
        <>
        <BasicExample/>

        <h1 className="termhd" data-aos="flip-left">Refund and Returns policy</h1>

        <div className="trpara">
        We have a 5-day exchange/return policy, which means you have 5 days after receiving your item to request a replacement or a return. For exchange/return, you can contact us at info@anaimalaiscoco.com.</div>

        <h4 className="sidehd">Exchanges and Returns</h4>
        <div className="trpara">
To be eligible for an exchange/return, your item must be in the same condition that you received it, unused and in its original packaging. To complete your exchange/return, the invoice must be provided at the time of return pickup. Once used, products will be ineligible for exchange or return.</div>

<h4 className="sidehd">Exchanges/Returns are only allowed in the following unlikely cases:</h4>
<div className="trpara">
The product is damaged or if you received the wrong item.
The product is not sealed properly at the time of delivery.
The product has expired by the time of delivery.</div>
<div className="trpara">
If your return is accepted, we will pick up the item ordered from the same address, and you will be notified of the expected pick-up date.
</div>
<div className="trpara">
In case of an exchange, the product will be delivered to you within 3-5 days after the return pick-up is done.
</ div>
<div className="trpara">
In case of any delivery related discrepancy, please reach out to us within 48 hours after the order been marked as delivered.
</div>
<div className="trpara">
Note: In case of any quality issue, kindly contact us on +91 89258 17100 or drop a mail to us at info@anaimalaiscoco.com .
</div>
<h4 className="sidehd">Cancellation:</h4>
<div className="trpara">
An order cancellation request will be accepted only if we have not yet shipped the product.
If a cancellation request is accepted, you are entitled to get a refund of the entire amount.
Anaimalais coco reserves the right to cancel or refuse to accept any order placed for various reasons, including but not limited to the non-availability of stock, pricing errors, informational errors or problems identified with the personal/financial details provided by the customer.</div>
<h4 className="sidehd">Refunds:</h4>
<div className="trpara">
Once your return is received and inspected, we will notify you that we have received your returned item. We will also notify you if the refund was approved or not.</div>
<div className="trpara">
If approved, you'll be automatically refunded on your original payment method. Please note that it generally takes around 5-7 days to reflect this amount.</div>
<div className="trpara">
You can always contact us for any return question at info@anaimalaiscoco.com.
        </div>
        <br />
<br />
<br />
<br />
<Foot/>
        
        </>
        
    )
}

export default Refund;