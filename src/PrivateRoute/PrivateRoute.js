import React, { useState } from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';
import GridLoader from "react-spinners/GridLoader";
import { css } from "@emotion/react";
import './PrivateRoute.css';

const spinnerCss = css`
  display: block;
  margin-bottom: 30px;
`;

const PrivateRoute = ({children, ...rest}) => {
    const {user, isLoading} = useAuth()
    const [loading] =useState(true);

    if(isLoading){
      return <div className="spinner_div_private">
      <GridLoader size={50} css={spinnerCss} loading={loading} color="#ac9061"/>
      </div>
    }
    return (
        <Route
              {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : ( 
            <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
        >

        </Route>
    );
};

export default PrivateRoute;