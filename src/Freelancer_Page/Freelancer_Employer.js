import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import Customer_Footer from './Customer/Customer_Footer';
import Customer_Header from './Customer/Customer_Header';
import List from './Customer/List';
import Add from './Customer/Add';
import Edit from './Customer/Edit';
import './Customer/freelancer-customer.css';
import axios from 'axios';

function Freelancer_Employer() {

    const customersData = [];
    const [customers, setCustomers] = useState(customersData);
    const loadData = async () =>{
        const response = await axios.get("http://localhost:3008/");
        console.log(response.data);
        console.log("this is first response done");
        setCustomers(response.data);
        // console.log(customers);
    }
    
    
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (id) => {
        const [customer] = customers.filter(customer => customer.id === id);

        setSelectedCustomer(customer);
        setIsEditing(true);
    }

    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [customer] = customers.filter(customer => customer.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${customer.firstName}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setCustomers(customers.filter(customer => customer.id !== id));
            }
        });
    }

    useEffect(()=>{
        console.log("Test");
        loadData();
    },[])

    console.log(customers)

    return (
        <div className='container'>
            <Customer_Header/>
            {/* List */}
            {!isAdding && !isEditing && (
                <>
                    <List
                        setIsAdding={setIsAdding}
                        customers={customers}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </>
            )}
            {/* Add */}
            {isAdding && (
                <Add
                    customers={customers}
                    setCustomers={setCustomers}
                    setIsAdding={setIsAdding}
                />
            )}
            {/* Edit */}
            {isEditing && (
                <Edit
                    customers={customers}
                    selectedCustomer={selectedCustomer}
                    setCustomers={setCustomers}
                    setIsEditing={setIsEditing}
                />
            )}
            <Customer_Footer/>
        </div>
    )
}

export default Freelancer_Employer;