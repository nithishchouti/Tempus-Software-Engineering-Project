import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function Add({ customers, setCustomers, setIsAdding }) {

    const [firstName, setFirstName] = useState('');
    const [mobileno, setMobileNo] = useState('');
    const [email, setEmail] = useState('');
    const [projectName, setSalary] = useState('');
    const [deadline, setDate] = useState('');
    const [clid, setClid] = useState('');
    const textInput = useRef(null);

    const sendBack = async () => {
        try{
           const response =  await fetch("http://localhost:3008/backend/route", {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({firstName, mobileno, email, projectName, deadline})

                
            })
            if (!response.ok) {
                throw new Error('Failed to save data to database');
            }else 
                console.log("Success");
            } catch(error) {
                    console.error(error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Error!',
                        text: 'Failed to save data to database',
                        showConfirmButton: true
                    });
            }
    }
  
    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!firstName || !mobileno || !email || !projectName || !deadline) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });

        }

        const id = customers.length + 1;
        const newCustomer = {
            id,
            firstName,
            mobileno,
            email,
            projectName,
            deadline
        }
        customers.push(newCustomer);
        setCustomers(customers);
        setIsAdding(false);
        sendBack();
        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${firstName}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <div className="small-container-fEmployer">
            <form onSubmit={handleAdd}>
                
                <label htmlFor=''></label>
                <h1 className="addemp">Add Client Info</h1>
                
                <label htmlFor="firstName">Full Name</label>
                <input
                    id="firstName"
                    type="text"
                    ref={textInput}
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                
                <label htmlFor="mobileno">Mobile Number</label>
                <input
                    id="mobileno"
                    type="number"
                    name="mobileno"
                    value={mobileno}
                    onChange={e => setMobileNo(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="projectname">Project Name</label>
                <input
                    id="salary"
                    type="text"
                    name="salary"
                    value={projectName}
                    onChange={e => setSalary(e.target.value)}
                />
                <label htmlFor="date">Project Deadline</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={deadline}
                    onChange={e => setDate(e.target.value)}
                />
                

                   
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Add" className="add-button-fEmployer"
                    onClick={()=>sendBack}/>
                    <input
                        style={{ marginLeft: '12px' }}
                        className="cancel-button-fEmployer"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );


}

export default Add;