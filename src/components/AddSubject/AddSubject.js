import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../Home/Navbar/Navbar';
import { useHistory } from "react-router-dom";

const AddSubject = () => {
   
    const { register, handleSubmit, watch, errors } = useForm();
    let history = useHistory();

    const onSubmit = data => {
        console.log(data);
        const subjectData = {
            name: data.name,
            //id: data.id,
            student: data.student,
            
            
        };
        const url = `https://obscure-bayou-72939.herokuapp.com/addSubject`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(subjectData)
        })
            .then(res => {
                console.log(res);
                if(res)
                    {
                        alert("successfully added");
                        history.push("/manageSubject");
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
                    <h1 className="text-center mt-3"><span style={{color: '#40E09C'}}>Add</span> Subject</h1>
                    <br />
                    
                    <div style={{ border: '1px solid #F5F5DC', height: '500px' }} className="ms-5 pt-5 ps-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h5>Subject Name</h5>
                            <input name="name" placeholder="Subject name" ref={register} />
                            <br />
                            <h5>Student</h5>
                            <input name="student" placeholder="Student" ref={register({ required: true })} />
                    
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

export default AddSubject;