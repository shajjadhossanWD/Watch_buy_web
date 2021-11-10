import React, { useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Header from '../../CommonParts/Header/Header';

const Register = () => {
    const [Register, setRegister] = useState({}); 
    const {RegisterUserWithEmail} = useAuth();
    const history = useHistory()

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newRegister = {...Register};
        newRegister[field]=value;
        setRegister(newRegister);
        console.log(newRegister)
    }

    const handleSubmit = e =>{
        if(Register.password !== Register.password2){
            alert('your password did not same');
            return;
        }
        RegisterUserWithEmail(Register.email, Register.password, Register.name, Register.img, history)
        e.preventDefault();
    }
    return (
    <>
     <Header/>
    <div className="login_div">
      <div className="row">
          <div className="col-lg-6">
          <h1 className="text-white">Please Register</h1>
          <form onSubmit={handleSubmit}>
           <input 
            placeholder="user name"
            style={{width: '90%', marginTop: '20px', padding: '8px'}}
            type="text"
            onBlur={handleOnBlur}
            name="name"
            />
           <input 
            placeholder="your email"
            style={{width: '90%', marginTop: '20px', padding: '8px'}}
            type="email"
            onBlur={handleOnBlur}
            name="email"
            />
           <input 
            placeholder="your password"
            style={{width: '90%', marginTop: '20px', padding: '8px'}}
            type="password"
            onBlur={handleOnBlur}
            name="password"
            />
           <input 
            placeholder=" ReType your password"
            style={{width: '90%', marginTop: '20px', padding: '8px'}}
            type="password"
            onBlur={handleOnBlur}
            name="password2"
            />
           <input 
            placeholder="your image url"
            style={{width: '90%', marginTop: '20px', padding: '8px'}}
            type="text"
            onBlur={handleOnBlur}
            name="img"
            />

           <input 
             style={{width: '90%', marginTop: '20px', padding: '8px', backgroundColor: '#bdab8d'}}
             type="submit" 
            />
          </form>
           <Link to="/login">
               <p  style={{marginTop: '20px'}}>Already Registered? Please login..</p>
           </Link>
          </div>
          <div className="col-lg-6">
              <img src="https://i.ibb.co/S09BXkR/silver-watch-PKXLPT7.png" style={{width: '50%'}} alt="" />
          </div>
      </div>
    </div>
    </>
    );
};

export default Register;