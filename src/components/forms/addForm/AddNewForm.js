import React, { useState } from 'react';
import './formStyle.css';

function Form(props) {
  const [firstName, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data
    console.log('Form submitted:', firstName, phone, email);
    props.onSubmit({id: "",
        name: firstName,
        phone: phone,
        email: email,
        contact_img: '',
        contact_text: ''})
  };

  const handleReset = () => {
    setFirstName('');
    setPhone('');
    setEmail('');
  };
  const handleCancel = () => {
    props.onCancel();
  };
  return (
    <div className="form-popup">
      <form className="form-container"onSubmit={handleSubmit} >
      <label>
        First Name:
        <input type="text" value={firstName}  onChange={(event) => setFirstName(event.target.value)} />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" value={phone}  onChange={(event) => setPhone(event.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email}  onChange={(event) => setEmail(event.target.value)} />
      </label>
      <br />
      <button type="submit" >Submit</button>
      <button type="button" onClick={handleReset}>Reset</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
    </div>
    
  );
}
export default Form;