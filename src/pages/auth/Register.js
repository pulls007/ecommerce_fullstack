import React, { useState } from 'react';
import { auth } from '../../firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(process.env.REACT_APP_REGISTER_REDIRECT_URL);
    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      // 'http://localhost:3000/reguster/complete',
      // This must be true.
      handleCodeInApp: true,
    };
    try {
      await auth.sendSignInLinkToEmail(email, config);
      toast.success(`Email link send to ${email}`);
      window.localStorage.setItem('emailForRegistration', email);
      setEmail('');
    } catch (err) {
      // toast.error(`${err}`);
    }
  };
  return (
    <div className='container p-5'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <h4>Register</h4>
          <form onSubmit={handleSubmit}>
            <input
              type='email'
              className='form-conrol'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            <button className='btn btn-raised' type='submit'>
              Register/Email
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Register;
