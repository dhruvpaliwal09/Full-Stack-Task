import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send the form data as JSON
      });

      if (response.ok) {
        console.log('User registered successfully.');
      } else {
        console.error('User registration failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  function fetchuser() {
    const newWindow = window.open('', '_blank');
    fetch("http://localhost:5000/users")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        newWindow.document.write(JSON.stringify(data,null,4));
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }

  return (
    <>
    <div className="mt-10 mx-2 sm:mx-12 pt-5 sm:pt-10 px-2 sm:px-10">
    <div className='space-x-5'>
    <button
            onClick={fetchuser}
              className="bg-black hover:bg-blue-dark text-white font-bold py-2 px-4 sm:px-10 rounded mb-2 sm:mb-0">
              Get all users
            </button>
            <Link href="/Deleteuser">
            <button
              className="bg-black hover:bg-blue-dark text-white font-bold py-2 px-4 sm:px-10 rounded mb-2 sm:mb-0">
              Delete account
            </button>
            </Link>
            </div>
      <form onSubmit={handleSubmit}>
        <p className="text-2xl sm:text-3xl font-bold text-center text-white">Sign Up Please!!</p>
        <div className="bg-gray-800 shadow-md rounded-3xl px-4 sm:px-8 pt-5 sm:pt-7 pb-5 sm:pb-7 flex flex-col">
          <div className="mb-2 sm:mb-4">
            <label className="block text-white text-sm sm:text-base font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3"
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2 sm:mb-4">
            <label className="block text-white text-sm sm:text-base font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3"
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2 sm:mb-4">
            <label className="block text-white text-sm sm:text-base font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3"
              id="email"
              name="email"
              type="email" // Set the input type to "email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2 sm:mb-6">
            <label className="block text-white text-sm sm:text-base font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none rounded w-full py-2 px-3 mb-2 sm:mb-3"
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password ******"
              value={formData.password}
              onChange={handleChange}
            />
          </div>



          <div className="flex flex-col sm:flex-row items-center justify-between">
            <button
              className="bg-black hover:bg-blue-dark text-white font-bold py-2 px-4 sm:px-10 rounded mb-2 sm:mb-0"
              type="submit"
            >
              Sign Up
            </button>

            <ul className="text-white mb-2 sm:mb-0">
              <li><a href="https://www.google.com">Don't have an account? Click here!</a></li>
            </ul>
            <a className="inline-block align-baseline font-bold text-sm text-white hover:text-blue-darker" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
      </form>
    </div>
    </>
  );
};

export default Signup;
