import React from 'react'
import { useSelector } from 'react-redux';
import { deleteCustomer } from './CustomerSlice';
import { useDispatch } from 'react-redux';

function CustomerView(){
  const customers = useSelector((state) => state.customers)
  const dispatch = useDispatch();

  function deleteHandler(index){
    dispatch(deleteCustomer(index));
  }

  return (
    <div>
      <h4>Customers list</h4> <hr style={{marginLeft:'43%', width:'200px'}} />
      <ul style={{listStyle:'none'}}>
        {
            customers.map((customer, index) => 
            <li className='fw-bold fs-5'>{customer} 
            <button className='btn btn-danger m-1' onClick={() => deleteHandler(index)}>Delete</button>
            </li>)
        }
      </ul>
    </div>
  )
}

export default CustomerView
