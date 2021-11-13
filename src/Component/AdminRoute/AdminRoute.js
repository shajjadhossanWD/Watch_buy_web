import React, { useState } from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import { css } from "@emotion/react";
import GridLoader from "react-spinners/GridLoader";
import './AdminRoute.css';

const spinnerCss = css`
  display: block;
  margin-bottom: 30px;
`;

const AdminRoute = ({children, ...rest}) => {
    const {user, admin} = useAuth()
    const [loading] =useState(true);

    if(!admin){
      return <div className="spinner_div_route">
      <GridLoader size={50} css={spinnerCss} loading={loading} color="#ac9061"/>
      </div>
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