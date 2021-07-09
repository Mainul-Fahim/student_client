import React, { useEffect, useState } from 'react';
import Navbar from '../Home/Navbar/Navbar';

const ManageStudent = () => {

    const [students, setStudents] = useState([]);
    const [subjects, setSubjects] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/students')
            .then(res => res.json())
            .then(data => setStudents(data));
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/subjects')
            .then(res => res.json())
            .then(data => setSubjects(data));
    }, [])

    const deleteStudent = id => {
        console.log(id);
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log("deleted", result);
                const deletedBook = document.getElementById('deletedStudent');
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
                    <div style={{ height: '500px' }} class="table-responsive-sm" className="ms-5 pt-5 ps-5 pe-5">
                        <table class="table table-striped table-dark">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Date of Birth</th>
                                    {/* <th>Subjects</th> */}
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    students.map(student => <tr id="deletedStudent">
                                        <td>{student.name}</td>
                                        <td> {student.email}</td>
                                        <td>{student.phone}</td>
                                        <td>{student.dateOfBirth}</td>
                                        {/* {subjects.map(subject=><td>{subject.name}</td>)} */}
                                        <td><button onClick={() => deleteStudent(student._id)} className="btn btn-primary">Delete</button></td></tr>)
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManageStudent;