import React from 'react';
import './contactList.css'
function ContactList(props) {
  const { users, onEditClick, onDeleteClick, onContactClick } = props;
  const handleContactClick = (user) => {
    onContactClick(user);
  }

  return (
    <div className='contactList'>
      {users.map((user) => (
        <div  key={user.id} className="contactListCard">
          <div className="clickToView" onClick={() => handleContactClick(user)}>
            <img src={user.contact_img} alt={user.name} />
            <div className="details">
              <h3>{user.name}</h3>
            <p>{user.phone}</p>
            <p>{user.email}</p>
          </div>
          </div>
          
          
          
          <button onClick={() => onEditClick(user)}>Edit</button>
          <button onClick={() => onDeleteClick(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ContactList;