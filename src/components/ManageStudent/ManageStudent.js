import React, { useEffect, useState } from 'react';
import Navbar from '../Home/Navbar/Navbar';

const ManageStudent = () => {

    const [students, setStudents] = useState([]);
    const [subjects, setSubjects] = useState([]);


    useEffect(() => {
        fetch('https://obscure-bayou-72939.herokuapp.com/students')
            .then(res => res.json())
            .then(data => setStudents(data));
    }, [])

    useEffect(() => {
        fetch('https://obscure-bayou-72939.herokuapp.com/subjects')
            .then(res => res.json())
            .then(data => setSubjects(data));
    }, [])

    const deleteStudent = id => {
        console.log(id);
        fetch(`https://obscure-bayou-72939.herokuapp.com/delete/${id}`, {
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
                    <h1 className="text-center mt-3">Student <span style={{color: '#40B4E0'}}>Table</span></h1>
                    <br />
                    <div style={{ height: '500px' }} class="table-responsive-sm" className="ms-5 pt-5 ps-5 pe-5">
                        <table class="table table-striped table-dark">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Date of Birth</th>
                                    <th>Subjects</th>
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
                                        <td>{subjects.map(subject=>{return subject.student===student.name?<li style={{listStyle:'none'}}>{subject.name}</li>:<li style={{listStyle:'none'}}></li>})}</td>
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