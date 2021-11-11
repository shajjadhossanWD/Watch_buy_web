import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const MakeAdmin = () => {
   const [email, setEmail] = useState('');
   const [adminSuccess, setAdminSuccess] = useState(false);

   const handleEmailBlur = e =>{
      setEmail(e.target.value);
   }

    const handleAddAdmin = (e) =>{
        const user = {email}
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setAdminSuccess(true);
        })
         e.preventDefault()
    }
    return (
        <div>
            <div className="dashboard_div">
                <h1 className="text-white">MAKE A ADMIN..</h1>
            </div>

            <div className="admin w-50 mx-auto my-5">
                <h1>ADD ADMIN</h1>
                <form onSubmit={handleAddAdmin}>
                   <input onBlur={handleEmailBlur} type="email" placeholder="your email" className="p-2" style={{width: '90%', marginBottom: '10px'}}/>
                   <input className="buttonGrp" type="submit" name="" id="" style={{width: '90%'}}/>
                </form>
            </div>
            {adminSuccess && <Alert variant="success">Make Admin Successfully</Alert>}
        </div>
    );
};

export default MakeAdmin;