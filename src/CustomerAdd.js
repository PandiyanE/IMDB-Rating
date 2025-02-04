import React, { useState } from 'react'
import CustomerView from './CustomerView';
import { addCustomer as addCustomerAction } from './CustomerSlice';
import { useDispatch } from 'react-redux';

function CustomerAdd(){
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    // const [customers, setCustomers] = useState([]);

    function addCustomer() {
        if (input) {
            // setCustomers((previousState) => [...previousState, input])  
            dispatch(addCustomerAction(input));
            setInput('');          
        }
    }         
             
  return (
  <>
    <div>
      <h3 className='m-3'>Add New Customer</h3>
      <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
      <button className='btn btn-success ms-2' onClick={addCustomer}>Add</button>
    </div> <br/>
    {/* <CustomerView customers={customers} /> */}
  </>
  )
}

export default CustomerAdd
