import React, { useEffect, useState } from 'react';
import Navbar from '../Home/Navbar/Navbar';

const ManageSubject = () => {

    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/subjects')
            .then(res => res.json())
            .then(data => setSubjects(data));
    }, [])

    const deleteService = id => {
        console.log(id);
        fetch(`http://localhost:5000/delete/${id}`, {
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
                    <div style={{ height: '500px' }} className="ms-5 pt-5 ps-5 pe-5 table-responsive-sm">
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
                                    subjects.map(subject => <tr id="deletedService">
                                        <td>{subject.name}</td>
                                        <td>{subject.student}</td>
                                        <td><button onClick={() => deleteService(subject._id)} className="btn btn-primary">Delete</button></td></tr>)
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