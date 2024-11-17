// import React from 'react';
import { Navigate } from 'react-router-dom';

function SignUp(){
  const [redirect, setRedirect] = useState(false);

  const handleSignupClick = () => {
    // Trigger redirection
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="./navbar" />;
  }

  return (
    <button onClick={handleSignupClick}>Go to Signup</button>
  );
};

export default SignUp
