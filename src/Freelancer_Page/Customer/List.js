import React from 'react';
import { Link } from "react-router-dom";

function List({ setIsAdding, customers, handleEdit, handleDelete }) {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: null
    });

    return (
        <div className='contain-table'>
            <div className='employer-hero'>
                <h1>Client Information</h1>
                <div className='switch-page-fEmployer'>
                    <div className='switched-div-fEmployer'>
                        Client Info
                    </div>
                    <div>
                        <Link to="/f-timesheet"><p className='p1-fEmployer'>Time Sheet</p></Link>
                    </div>
                    <div>
                        <Link to="/f-invoice"><p className='p2-fEmployer'>Rates & Invoice</p></Link>
                    </div>
                </div>
            </div>
            <table className='striped-table-fEmployer'>
                <thead>
                    <tr>
                        <th>Client No.</th>
                        <th>Client Name</th>
                        <th>Mobile Number</th>
                        <th>Email</th>
                        <th>Project Name(s)</th>
                        <th>Deadline</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                   

                    {customers.length > 0 ? (
                        customers.map((customer, i) => (
                            <tr key={i}>
                                <th>{customer[0]}</th>
                                <th>{customer[1]}</th>
                                <th>{customer[2]}</th>
                                <th>{customer[3]}</th>
                                <th>{customer[4]}</th>
                                <th>{customer[5]} </th>
                                <th className="text-right">
                                    <button
                                        onClick={() => handleEdit(customer.id)}
                                        className="muted-button-fEmployer"
                                    >
                                        <img className='edit-logo-fEmployer' alt="edit" src="./images/edit-button.png"/>
                                    </button>
                                </th>
                                <th className="text-left">
                                    <button
                                        onClick={() => handleDelete(customer.id)}
                                        className="muted-button-Employee"
                                    >
                                        <img className='delete-logo-fEmployer' alt="delete" src="./images/delete-button.jpg"/>
                                    </button>
                                </th>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}></td>
                        </tr>
                    )}
                </tbody>
            </table>
            <button onClick={() => setIsAdding(true)} className='round-button-fEmployer'>Add Button</button>
        </div>
    )
}

export default List;