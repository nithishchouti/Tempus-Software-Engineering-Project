import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function Add({ employees, setEmployees, setIsAdding }) {

    const [firstName, setFirstName] = useState('');
    const [mobileno, setMobileNo] = useState('');
    const [cost, setCost] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!firstName || !mobileno || !cost || !category || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = employees.length + 1;
        const newEmployee = {
            id,
            firstName,
            mobileno,
            cost,
            category,
            date
        }
        employees.push(newEmployee);
        setEmployees(employees);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${firstName}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <div className="small-container-bEmployee">
            <form onSubmit={handleAdd}>
                <h1 className="addemp">Add Product</h1>
                <label htmlFor="firstName">Product Name</label>
                <input
                    id="firstName"
                    type="text"
                    ref={textInput}
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="mobileno">Cost (per unit)</label>
                <input
                    id="mobileno"
                    type="number"
                    name="mobileno"
                    value={cost}
                    onChange={e => setCost(e.target.value)}
                />
                <label htmlFor="mobileno">Quantity</label>
                <input
                    id="mobileno"
                    type="number"
                    name="mobileno"
                    value={mobileno}
                    onChange={e => setMobileNo(e.target.value)}
                />
                <label htmlFor="firstName">Category</label>
                <input
                    id="firstName"
                    type="text"
                    ref={textInput}
                    name="firstName"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                />
                <label htmlFor="date">Purchased Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" className="add-button-bEmployee" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="cancel-button-bEmployee"
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