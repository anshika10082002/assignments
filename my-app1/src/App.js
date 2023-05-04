import React, { useState } from 'react';
import InvoiceForm from './InvoiceForm';
import InvoiceGrid from './InvoiceGrid';

 const App = () => {
    const [invoices, setInvoices] = useState([]);
    
    const handleSubmit = (invoice) => {
    setInvoices([...invoices, invoice]);
    };
    
    return (
    <div>
    <InvoiceForm onSubmit={handleSubmit} />
    <InvoiceGrid invoices={invoices} />
    </div>
    );
    };
  
    export default App;
