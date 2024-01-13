import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidateData } from '../utils/validate';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleButtonClick = () => {

    const message = checkValidateData(email.current.value, password.current.value);
    setErrorMessage(message);
  }

  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='Background'/>
      </div>
      <form 
        onSubmit={(e) => e.preventDefault()}
        className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm? "Sign In": "Sign Up"}</h1>
        {!isSignInForm && <input 
          type="text"
          placeholder='name'
          className='p-4 my-4 w-full bg-gray-700'
        />}
        <input 
          ref={email}
          type="email"
          placeholder='Email'
          className='p-4 my-4 w-full bg-gray-700'
        />
        <input
          ref={password}
          type="password"
          placeholder='password'
          className='p-4 my-4 w-full bg-gray-700'
        />
        <p className='text-red-600 font-bold text-xl'>{errorMessage}</p>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick} >{isSignInForm? "Sign In": "Sign Up"} </button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New to Filmflix? Sign Up Now":"Already registered, Go to Sign In!"}</p>
      </form>
    </div>
  )
}

export default Login;