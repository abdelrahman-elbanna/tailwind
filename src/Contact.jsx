import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    username: '',
    userage: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getBorderClass = (value) => {
    return `border-b-2 mb-6 rounded-l w-full transition-all outline-none ${
      value ? 'border-green-500' : 'border-slate-400'
    }`;
  };

  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center justify-center px-4">
        <div className="title text-center">
          <h1 className='text-slate-700 text-4xl font-bold uppercase'>contact section</h1>
          <div className='flex justify-center items-center mt-2'>
            <div className='bg-slate-700 h-1 mx-auto mt-2 w-2/6'></div>
            <span className="star-1 text-slate-700 font-bold text-3xl">★</span>
            <div className='bg-slate-700 h-1 mx-auto mt-2 w-2/6'></div>
          </div>
        </div>

        <form className='flex flex-col gap-5 w-full sm:w-3/4 md:w-1/2 mt-10'>
          <div>
            <input
              type="text"
              name="username"
              placeholder="UserName"
              value={formData.username}
              onChange={handleChange}
              className={getBorderClass(formData.username)}
            />
            <label htmlFor="userName"></label>
          </div>

          <div>
            <input
              type="number"
              name="userage"
              placeholder="UserAge"
              value={formData.userage}
              onChange={handleChange}
              className={getBorderClass(formData.userage)}
            />
            <label htmlFor="userage"></label>
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="UserEmail"
              value={formData.email}
              onChange={handleChange}
              className={getBorderClass(formData.email)}
            />
            <label htmlFor="email"></label>
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="UserPassword"
              value={formData.password}
              onChange={handleChange}
              className={getBorderClass(formData.password)}
            />
            <label htmlFor="password"></label>
          </div>

          <button
            type="submit"
            className="mt-4 bg-green-500 text-white py-2 px-6 rounded-lg font-semibold text-lg hover:bg-green-600 transition-all self-center"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
