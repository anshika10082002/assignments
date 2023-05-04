 import React, { useState } from "react"; 
import { useEffect } from "react";


const InvoiceForm = ({ onSubmit }) => {
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);
  const [discountPercent, setDiscountPercent] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [taxPercent, setTaxPercent] = useState(0);
  const [tax, setTax] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const discountPercentValue = ((discount / price) * 100).toFixed(2);
    setDiscountPercent(discountPercentValue);

    const taxPercentValue = ((tax / price) * 100).toFixed(2);
    setTaxPercent(taxPercentValue);

    const totalPriceValue = (qty * price - discount + tax).toFixed(2);
    setTotalPrice(totalPriceValue);
  }, [qty, price, discount, tax]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      qty,
      price,
      discountPercent,
      discount,
      taxPercent,
      tax,
      totalPrice
    });
  };

  return (
    <div className="main">
    <h2>Invoice Web App</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Qty:</label>
        <input type="number" value={qty} onChange={(e) => setQty(e.target.value)} />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div>
        <label>Discount %:</label>
        <input type="number" value={discountPercent} onChange={(e) => setDiscount((price * e.target.value) / 100)} />
      </div>
      <div>
        <label>Discount:</label>
        <input type="number" value={discount} onChange={(e) => setDiscount(e.target.value)} />
      </div>
      <div>
        <label>Tax %:</label>
        <input type="number" value={taxPercent} onChange={(e) => setTax((price * e.target.value) / 100)} />
      </div>
      <div>
        <label>Tax:</label>
        <input type="number" value={tax} onChange={(e) => setTax(e.target.value)} />
</div>
<div>
<label>Total Price:</label>
<input type="number" value={totalPrice} readOnly />
</div>
<button type="submit">Submit</button>
</form>
</div>
);
};

export default InvoiceForm;


//=====================================================================================
