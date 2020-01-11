import React from 'react';

export default function withAuth(Component) {
  return props => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token === null) {
      return <Redirect to='/signin' />;
    }
    return <Component {...props} token={token} />;
  };
}
