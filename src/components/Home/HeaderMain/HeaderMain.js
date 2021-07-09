import React from 'react';
import blog from '../../../Images/student.gif';

const HeaderMain = () => {
    return (
        <main style={{height: '600px' , width: '100%'}} className="row d-flex align-items-center">
        <div className="col-md-4 offset-md-1">
            <h1 style={{color: '#232323', fontSize: '50px'}}> <b>Join the world's <br/> biggest Student <br/>related network! </b></h1>
            <p className="text-secondary">We are providing Student related posting for make your life easier.</p>
            <a style={{ height: '40px', width: '170px' }}  className="btn btn-outline-success rounded-pill" id="#blogs" href="/manageSubject"><b>Explore Subjects</b> </a>
        </div>
        <div className="col-md-6 ms-auto">
            <img style={{borderRadius: '70px'}} src={blog} alt="" className="img-fluid w-75 "/>
        </div>
    </main>
    );
};

export default HeaderMain;