import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { PATHS } from 'src/constants/paths';
import { hasStorageJwtToken } from 'src/helpers/storage';

export const LoginRoute: React.FC<RouteProps> = (props) => {
  const isLoggedIn = hasStorageJwtToken()

  if (isLoggedIn) {
    return (
      <Redirect
        to={{
          pathname: PATHS.default(),
        }}
      />
    );
  }

  return <Route {...props} />;
};
