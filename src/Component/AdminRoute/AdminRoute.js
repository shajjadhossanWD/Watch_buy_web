import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';


const AdminRoute = ({children, ...rest}) => {
    const {user, admin, isLoading} = useAuth()
    if(isLoading && admin){
      return <Spinner animation="border" variant="info" />
    }
    return (
        <Route
              {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : ( 
            <Redirect
            to={{
              pathname: "/home",
              state: { from: location }
            }}
          />
        )
      }
        >

        </Route>
    );
};

export default AdminRoute;