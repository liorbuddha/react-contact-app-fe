import React from 'react';
import './ContactCard.css';
function ContactCard({ user, onCloseClick }) {
  return (
    <div className="contactCard">
      <button onClick={onCloseClick}>Close</button>
      <h3>{user.name}</h3>
      <img src={user.contact_img} alt={user.name} />
      <p>{user.phone}</p>
      <p>{user.email}</p>
      <p>{user.address}</p>
      <p>{user.contact_text}</p>
    </div>
  );
}

export default ContactCard;