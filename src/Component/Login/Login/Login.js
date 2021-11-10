import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Header from '../../CommonParts/Header/Header';
import './Login.css';

const Login = () => {
  const {loginUser} = useAuth();
  const location = useLocation();
  const history = useHistory();
  const [loginData, setLoginData] = React.useState({}); 

  const handleOnBlur = e =>{
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = {...loginData};
    newLoginData[field]=value;
    setLoginData(newLoginData);
    console.log(newLoginData)
}

const handleLogIn = e =>{
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
}


    return (
    <>
    <Header></Header>
    <div className="login_div">
      <div className="row">
          <div className="col-lg-6">
          <h1 className="text-white">Please Login</h1>
          <form onSubmit={handleLogIn}>
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
             style={{width: '90%', marginTop: '20px', padding: '8px', backgroundColor: '#bdab8d'}}
             type="submit" 
            />
          </form>
           <Link to="/register">
               <p  style={{marginTop: '20px'}}>New to JWATCH? Please Register..</p>
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

export default Login;