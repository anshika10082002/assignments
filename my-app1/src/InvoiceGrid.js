
import React from 'react';

function InvoiceGrid({ invoices, handleEdit }) {
  return (
    <div>
      <h2>Invoices</h2>
      <table>
        <thead>
          <tr>
            <th>Qty</th>
            <th>Price</th>
            <th>Discount %</th>
            <th>Discount</th>
            <th>Tax %</th>
            <th>Tax</th>
            <th>Total Price</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice, index) => (
            <tr key={index}>
              <td>{invoice.qty}</td>
              <td>{invoice.price}</td>
              <td>{invoice.discountPercent}</td>
              <td>{invoice.discount}</td>
              <td>{invoice.taxPercent}</td>
              <td>{invoice.tax}</td>
              <td>{invoice.totalPrice}</td>
              <td><button onClick={() => handleEdit(index)}>Edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


 export default InvoiceGrid;




 //=========================================================

 