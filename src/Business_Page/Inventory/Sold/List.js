import React from 'react';
import { Link } from "react-router-dom";

function List({ setIsAdding, employees, handleEdit, handleDelete }) {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: null
    });

    return (
        <div className='contain-table-sold'>
            <div className='employee-hero'>
                <h1>Inventory</h1>
                <div className='switch-page-sold'>
                    <div>
                        <Link to="/b-employee"><p className='p1-bInventory'>Employee Info</p></Link>
                    </div>
                    <div className='switched-div-sold'>
                        Inventory
                    </div>
                    <div>
                        <Link to="/b-invoice"><p className='p2-bInventory'>Invoice</p></Link>
                        {/*<Link to="/b-invoice"><p className='p2-sold'>Invoice</p></Link>*/}
                    </div>    
                </div>
                <div className='switch-page-sold2'>
                    <div>
                        <Link to="/bought"><p className='p1-sold2'>Products Bought</p></Link>
                    </div>
                    <div className='switched-div-sold2'>
                        Products Sold
                    </div>    
                </div>
            </div>
            <table className='striped-table-bought'>
                <thead>
                    <tr>
                        <th>Product No.</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Cost(per unit)</th>
                        <th>Category</th>
                        <th>Purchased Date</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Test Case</td>
                        <td>2</td>
                        <td>$50</td>
                        <td>Test Case</td>
                        <td>2023-01-01</td>
                        <th colSpan={2} className="text-center" align='center'>
                            <td className="text-right">
                                <button className="muted-button-bought">
                                    <img className='edit-logo-bought' alt="edit" src="./images/edit-button.png"/>
                                </button>
                            </td>
                            <td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td>
                            <td className="text-left">
                                <button className="muted-button-bought">
                                    <img className='delete-logo-bought' alt="delete" src="./images/delete-button.jpg"/>
                                </button>
                            </td>
                        </th>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>One Plus 8</td>
                        <td>1</td>
                        <td>$540</td>
                        <td>Electronics</td>
                        <td>2023-04-24</td>
                        <th colSpan={2} className="text-center" align='center'>
                            <td className="text-right">
                                <button className="muted-button-bought">
                                    <img className='edit-logo-bought' alt="edit" src="./images/edit-button.png"/>
                                </button>
                            </td>
                            <td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td>
                            <td className="text-left">
                                <button className="muted-button-bought">
                                    <img className='delete-logo-bought' alt="delete" src="./images/delete-button.jpg"/>
                                </button>
                            </td>
                        </th>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Refrigerator</td>
                        <td>1</td>
                        <td>$800</td>
                        <td>Electronics</td>
                        <td>2023-05-07</td>
                        <th colSpan={2} className="text-center" align='center'>
                            <td className="text-right">
                                <button className="muted-button-bought">
                                    <img className='edit-logo-bought' alt="edit" src="./images/edit-button.png"/>
                                </button>
                            </td>
                            <td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td><td> </td>
                            <td className="text-left">
                                <button className="muted-button-bought">
                                    <img className='delete-logo-bought' alt="delete" src="./images/delete-button.jpg"/>
                                </button>
                            </td>
                        </th>
                    </tr>
                    {employees.length > 0 ? (
                        employees.map((employee, i) => (
                            <tr key={employee.id}>
                                <td>{i + 4}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.mobileno}</td>
                                <td>{formatter.format(employee.cost)}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.date} </td>
                                <td className="text-right">
                                    <button
                                        onClick={() => handleEdit(employee.id)}
                                        className="muted-button-bought"
                                    >
                                        <img className='edit-logo-bought' alt="edit" src="./images/edit-button.png"/>
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(employee.id)}
                                        className="muted-button-bought"
                                    >
                                        <img className='delete-logo-bought' alt="delete" src="./images/delete-button.jpg"/>
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}></td>
                        </tr>
                    )}
                </tbody>
            </table>
            <button onClick={() => setIsAdding(true)} className='round-button-sold'>Add Button</button>
        </div>
    )
}

export default List;