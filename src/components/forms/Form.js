import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    firstName: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form verilerini işleme
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
        />
      </label>
      <br />
      <label>
        First Name:
        <input 
          type="text" 
          name="firstName" 
          value={formData.firstName} 
          onChange={handleChange} 
        />
      </label>
      <br />
      <label>
        Password:
        <input 
          type="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
