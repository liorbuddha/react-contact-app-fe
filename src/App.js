import React, { useState } from 'react';
import AddForm from './components/forms/addForm/AddNewForm';
import ContactList from './components/contactList/ContactList';
import EditForm from './components/forms/editForm/EditForm';
import Footer from './components/footer/Footer'
import ContactCard from './components/contactCard/ContactCard';
import Search from './components/search/Search';
import './App.css'
function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      phone: '555-555-5555',
      address: 'haifa',
      email: 'john.doe@example.com',
      contact_img: 'https://via.placeholder.com/150',
      contact_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      id: 2,
      name: 'Jane Smith',
      phone: '555-555-5555',
      address: 'haifa',
      email: 'jane.smith@example.com',
      contact_img: 'https://via.placeholder.com/150',
      contact_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      id: 3,
      name: 'Charlie',
      phone: '555-9012',
      address: 'haifa',
      email: 'charlie@example.com',
      contact_img: 'https://via.placeholder.com/150',
      contact_text: 'Hi, I am Charlie!'
    }
  ].sort((a, b) => a.name < b.name ? -1 : 1));
  const [editingUser, setEditingUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [addNewFormInUse, setAddNewFormInUse] = useState(false);

  const handleAddUser = (user) => {
    console.log("user to ad: "+user);
    let newUser = { ...user, id: users.length + 1 };
    newUser = { ...user, contact_img: 'https://via.placeholder.com/150'};
    setUsers([...users, newUser]);
    setAddNewFormInUse(false);
  };

  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const handleEditUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    setEditingUser(null);
  };

  const handleEditClick = (user) => {
    setEditingUser(user);
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
  };
  const handleDeleteAllUsers = () => {
    setUsers([]);
  };
  const handleSearch = (results) => {
    setSearchResults(results);
  };

  const handleCloseDetailsClick = () => {
    setSelectedUser(null);
  };
  
  const handleFormCancel = () => {
    setAddNewFormInUse(false);
  };

  const openForm = () => {
    setAddNewFormInUse(true);
  };
  
  return (
    <div className="App">
      <main>
        <h1>Contact List</h1>
      {editingUser ? (
        <EditForm classname="contact-list" user={editingUser} onSubmit={handleEditUser} onCancel={handleCancelEdit} />
      ) : (
        <div></div>
      )}
      {addNewFormInUse ? (
        <AddForm onSubmit={handleAddUser} onCancel={handleFormCancel}/>
      ) : (
        <div></div>
      )}
      <div className="btns">
        <button className="delAllBtn" onClick={handleDeleteAllUsers}>Delete All Contacts</button>
        <button className="addNewBtn" onClick={openForm}>Add new contact</button>
      </div>
      
      
      <div className='search-wrapper'><Search users={users} onSearch={handleSearch} /></div>
      
      <ContactList
        users={searchResults || users}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteUser}
        onContactClick={setSelectedUser}
      />
      {selectedUser && (
        <ContactCard user={selectedUser} onCloseClick={handleCloseDetailsClick} />
      )}
      
      </main>
      <Footer/>
    </div>
  );
}



export default App;