import React from 'react';
import { Link } from "react-router-dom";

function Invoice_hero(){
    return(
        <div className='fInvoice-hero'>
            <h1>Invoice</h1>
            <div className='switch-page-fInvoice'>
                <div>
                    <Link to="/f-employer"><p className='p1-fInvoice'>Client Info</p></Link>
                </div>
                <div>
                    <Link to="/f-timesheet"><p className='p2-fInvoice'>Time Sheet</p></Link>
                </div>  
                <div className='switched-div-fInvoice'>
                    Rates & Invoice
                </div>  
            </div>
            <table className='striped-table-bEmployee'>
                <thead>
                    <tr>
                        <th>Invoice No.</th>
                        <th>Client's Name</th>
                        <th>Mobile Number</th>
                        <th>Due Date</th>
                        <th>Paid</th>
                        <th>Comments</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>AMR1559</th>
                        <th>Rajesh</th>
                        <th>9657844911</th>
                        <th>2023-05-28</th>
                        <th>No</th>
                        <th><input></input></th>
                        <th colSpan={2} className="text-center" align='center'>
                            <td className="text-right">
                                <button className="muted-button-bEmployee">
                                    <img className='edit-logo-bEmployee' alt="edit" src="./images/edit-button.png"/>
                                </button>
                            </td>
                            <td className="text-left">
                                <button className="muted-button-bEmployee">
                                    <img className='delete-logo-bEmployee' alt="delete" src="./images/delete-button.jpg"/>
                                </button>
                            </td>
                            {/* Have to add an email image here */}
                            <td className="text-right">
                                <button className="muted-button-bEmployee">
                                    <img className='edit-logo-bEmployee' alt="edit" src="./images/link-button.png"/>
                                </button>
                            </td>
                        </th>
                    </tr>
                    <tr>
                        <th>CIR8553</th>
                        <th>Keshav</th>
                        <th>7959449866</th>
                        <th>2023-04-28</th>
                        <th>Yes</th>
                        <th><input></input></th>
                        <th colSpan={2} className="text-center" align='center'>
                            <td className="text-right">
                                <button className="muted-button-bEmployee">
                                    <img className='edit-logo-bEmployee' alt="edit" src="./images/edit-button.png"/>
                                </button>
                            </td>
                            <td className="text-left">
                                <button className="muted-button-bEmployee">
                                    <img className='delete-logo-bEmployee' alt="delete" src="./images/delete-button.jpg"/>
                                </button>
                            </td>
                            {/* Have to add an email image here */}
                            <td className="text-right">
                                <button className="muted-button-bEmployee">
                                    <img className='edit-logo-bEmployee' alt="edit" src="./images/link-button.png"/>
                                </button>
                            </td>
                        </th>
                    </tr>
                    <tr>
                        <th>MRN6653</th>
                        <th>Sanjana</th>
                        <th>7556814996</th>
                        <th>2023-04-25</th>
                        <th>No</th>
                        <th><input></input></th>
                        <th colSpan={2} className="text-center" align='center'>
                            <td className="text-right">
                                <button className="muted-button-bEmployee">
                                    <img className='edit-logo-bEmployee' alt="edit" src="./images/edit-button.png"/>
                                </button>
                            </td>
                            <td className="text-left">
                                <button className="muted-button-bEmployee">
                                    <img className='delete-logo-bEmployee' alt="delete" src="./images/delete-button.jpg"/>
                                </button>
                            </td>
                            {/* Have to add an email image here */}
                            <td className="text-right">
                                <button className="muted-button-bEmployee">
                                    <img className='edit-logo-bEmployee' alt="edit" src="./images/link-button.png"/>
                                </button>
                            </td>
                        </th>
                    </tr>
                </tbody>
            </table>
            <div>
                <Link to="/freelancer-invoice-form"><button className='round-button-fInvoice'>Add Invoice</button></Link>
            </div>
        </div>
    )
}

export default Invoice_hero;