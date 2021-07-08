import React, { useEffect, useState } from 'react';
import Navbar from '../Home/Navbar/Navbar';

const ManageSubject = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://safe-dusk-28084.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    const deleteService = id => {
        console.log(id);
        fetch(`https://safe-dusk-28084.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log("deleted", result);
                const deletedBook = document.getElementById('deletedService');
                deletedBook.style.display = 'none';
            })
    }


    return (
        <section>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="container-fluid row">
                <div>
                    <h1 className="text-center mt-3">Student Table</h1>
                    <br />
                    <div style={{ border: '1px solid cyan', height: '500px' }} className="ms-5 pt-5 ps-5 pe-5 table-responsive-sm">
                        <table class="table table-striped table-dark">
                            <thead>
                                <tr>
                                    <th>Subject Name</th>
                                    <th>Students</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    services.map(service => <tr id="deletedService">
                                        <td>{service._id}</td>
                                        <td>{service.serviceName}</td>
                                        <td><button onClick={() => deleteService(service._id)} className="btn btn-primary">Delete</button></td></tr>)
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManageSubject;