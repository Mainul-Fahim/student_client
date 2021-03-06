import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddStudent.css';
import Navbar from '../Home/Navbar/Navbar';
import { useHistory } from "react-router-dom";

const AddStudent = () => {
    
    const { register, handleSubmit, watch, errors } = useForm();
    let history = useHistory();

    const onSubmit = data => {
        console.log(data);
        const studentsData = {
            name: data.name,
            //id: data.id,
            email: data.email,
            phone: data.phone,
            dateOfBirth: data.dateOfBirth,
            
        };
        const url = `https://obscure-bayou-72939.herokuapp.com/addStudent`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(studentsData)
        })
            .then(res => {
                console.log(res);
                if(res)
                    {
                        alert("successfully added");
                        history.push("/manageStudent");
                    }
            })
    };

    return (
        <>
            <div>
                    <div>
                        <Navbar></Navbar>
                    </div>
                <section className="mb-3 addStudent">
                    <h1 className="text-center mt-3"><span style={{color: '#40E09C'}}>Add</span> Student</h1>
                    <br />
                    
                    <div style={{ border: '1px solid #F5F5DC', height: '500px' }} className="ms-5 pt-5 ps-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h5>Name</h5>
                            <input name="name" placeholder="name" ref={register} />
                            <br />
                            <h5>email</h5>
                            <input name="email" placeholder="email" ref={register({ required: true })} />
                            <br />
                            <h5>Phone</h5>
                            <input name="phone" placeholder="phone" ref={register} />
                            <br />
                            <h5>Date of Birth</h5>
                            <input name="dateOfBirth" placeholder="date of birth" ref={register} />
                            <br />
                            <br />
                            <input type="submit" />
                        </form>
                    </div>
                </section>
            </div>
            
        </>
    );
};

export default AddStudent;