import React, { useEffect, useState } from 'react';
import Navbar from '../Home/Navbar/Navbar';

const ManageSubject = () => {

    const [subjects, setSubjects] = useState([]);
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('https://obscure-bayou-72939.herokuapp.com/subjects')
            .then(res => res.json())
            .then(data => setSubjects(data));
    }, [])

    useEffect(() => {
        fetch('https://obscure-bayou-72939.herokuapp.com/students')
            .then(res => res.json())
            .then(data => setStudents(data));
    }, [])

    const deleteService = id => {
        console.log(id);
        fetch(`https://obscure-bayou-72939.herokuapp.com/delete/${id}`, {
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
                    <h1 className="text-center mt-3">Subject <span style={{color: '#40B4E0'}}>Table</span></h1>
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