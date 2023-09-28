import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {

    const id = selectedEmployee.id;

    const [firstName, setFirstName] = useState(selectedEmployee.firstName);
    const [mobileno, setMobileNo] = useState(selectedEmployee.mobileno);
    const [cost, setCost] = useState(selectedEmployee.cost);
    const [category, setCategory] = useState(selectedEmployee.category);
    const [date, setDate] = useState(selectedEmployee.date);

    const handleUpdate = e => {
        e.preventDefault();

        if (!firstName || !mobileno || !cost || !category || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const employee = {
            id,
            firstName,
            mobileno,
            cost,
            category,
            date
        };

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                employees.splice(i, 1, employee);
                break;
            }
        }

        setEmployees(employees);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${employee.firstName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container-bEmployee">
            <form onSubmit={handleUpdate}>
                <h1>Edit Product</h1>
                <label htmlFor="firstName">Product Name</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="mobileno">Quantity</label>
                <input
                    id="mobileno"
                    type="text"
                    name="mobileno"
                    value={mobileno}
                    onChange={e => setMobileNo(e.target.value)}
                />
                <label htmlFor="mobileno">Cost(per unit)</label>
                <input
                    id="mobileno"
                    type="text"
                    name="mobileno"
                    value={cost}
                    onChange={e => setCost(e.target.value)}
                />
                <label htmlFor="firstName">Category</label>
                <input
                    id="firstName"
                    type="text"
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
                    <input type="submit" value="Update" className='update-button-bEmployee' />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="cancel-button-bEmployee"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit