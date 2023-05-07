import { useState } from 'react';
import Login from '../../components/login/Login';
import Signup from '../../components/signup/Signup';

export default function AuthorizationPage() {
  const [isLoginComponent, setIsLoginComponent] = useState(true);
  return (
    <>
      {isLoginComponent ? (
        <Login setIsLoginComponent={setIsLoginComponent} />
      ) : (
        <Signup setIsLoginComponent={setIsLoginComponent} />
      )}
    </>
  );
}
