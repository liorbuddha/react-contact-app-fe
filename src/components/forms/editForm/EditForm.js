import React, { useState } from 'react';
//import './formStyle.css';
import './EditForm.css';

function EditForm({ user, onSubmit, onCancel }) {
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(user.adress)
  const [contact_img, setContactImg] = useState(user.contact_img);
  const [contact_text, setContactText] = useState(user.contact_text);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedUser = {
      id: user.id,
      name,
      phone,
      address,
      email,
      contact_img,
      contact_text
    };
    onSubmit(updatedUser);
  };

  return (
    <div className="editFormContainer">
      <form className="editFormContent" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br />
      <label htmlFor="phone">Phone:</label>
      <input
        type="text"
        id="phone"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />
      <br />
      <label htmlFor="contact_img">Profile Picture:</label>
      <input
        type="text"
        id="contact_img"
        value={contact_img}
        onChange={(event) => setContactImg(event.target.value)}
      />
      <br />
      <label htmlFor="contact_text">ther:</label>
      <textarea
        id="contact_text"
        value={contact_text}
        onChange={(event) => setContactText(event.target.value)}
      />
      <br />
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
    </div>
    
  );
}

export default EditForm;