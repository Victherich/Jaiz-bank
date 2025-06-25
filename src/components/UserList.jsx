
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ManageUser from './ManageUser';

// Styled Components
const Container = styled.div`
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;

  @media(max-width:428px){
    padding:0px;
    padding:50px 5px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 0.75rem;
  margin-bottom: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;

  th, td {
    padding: 0.75rem;
    border: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: #3C9E37;
    color: white;
  }

  @media (max-width: 768px) {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
`;

const Button = styled.button`
  cursor:pointer;
  background:#3C9E37;
  border:none;
  color:white;
  margin:2px;
  padding:4px;
  border-radius:5px;

  &:hover{
  background:purple;
  }
`

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchEmail, setSearchEmail] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  console.log(users)

 

    const getUsers=()=>{
    // Fetch all users on component mount
    axios.get('https://jizbankplc.com/api2/get_all_users.php')
      .then(response => {
        if (response.data.success) {
          setUsers(response.data.users);
        } else {
          console.error(response.data.error);
        }
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
    }

 useEffect(() => {
      getUsers();
  }, []);

  // Filter users based on search input
  const filteredUsers = users.filter(user =>
    user.email.toLowerCase().includes(searchEmail.toLowerCase())
  );




  return (
    <Container>
      <h2 style={{color:"#3C9E37"}}>All Users</h2>
      <SearchInput
        type="text"
        placeholder="Search by email..."
        value={searchEmail}
        onChange={(e) => setSearchEmail(e.target.value)}
      />
      <Table>
        <thead>
          <tr>
            {/* <th>ID</th> */}
            {/* <th>User Name</th> */}
            <th>Email</th>
            <th>Phone</th>
         
            {/* <th>Balance</th> */}
            {/* <th>Country</th> */}
            <th>Created At</th>
            <th>Suspended?</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map(user => (
              <tr key={user.id}>
                {/* <td>{user.id}</td> */}
                {/* <td>{user.username}</td> */}
                <td>{user.email}</td>
                <td>{user.phone}</td>
    
                {/* <td>$ 
  {new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(parseFloat(user.balance))}

</td> */}
{/* <td>{user.country}</td> */}
                <td>{new Date(user.created_at).toLocaleString()}</td>
                <td style={{backgroundColor:user.suspended==='1'?"red":'', color:user.suspended==="1"?"white":""}}>{user.suspended==='1'?'YES':'NO'}</td>
                <td>
                  <Button onClick={() => setSelectedUser(user)}>Manage User</Button>
                </td>
              
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No users found.</td>
            </tr>
          )}
        </tbody>
      </Table>
      {selectedUser && (
        <ManageUser user={selectedUser} onClose={() => setSelectedUser(null)} getUsers={getUsers}/>
      )}
    </Container>
  );
};

export default UserList;
