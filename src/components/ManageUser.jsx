// // UserModal.js
// import React, { useState } from 'react';
// import styled from 'styled-components';
//   import Swal from 'sweetalert2';
// import axios from 'axios';
// import CreditUserModal from './CreditUserModal';
// import DebitUserModal from './DebitUserModal';
// import EmailUserModal from './EmailUserModal';

// const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0; left: 0;
//   width: 100%; height: 100%;
//   background: rgba(0,0,0,0.6);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 1000;
// `;

// const ModalContent = styled.div`
//   background: white;
//   padding: 2rem;
//   border-radius: 12px;
//   max-width: 500px;
//   width: 100%;
// `;

// const ModalTitle = styled.h3`
//   margin-top: 0;
//   color: #000050;
// `;

// const ModalActions = styled.div`
//   margin-top: 1.5rem;
//   display: flex;
//   flex-wrap: wrap;
//   gap: 0.5rem;
// `;

// const Button = styled.button`
//   cursor: pointer;
//   background: #000050;
//   background:lightgray;
//   border: 1px solid #000050;
//   color: #000050;
//   margin: 2px;
//   padding: 6px 10px;
//   border-radius: 5px;

//   &:hover {
//     background: #000050;
//     color:white;
//   }
// `;

// const ManageUser = ({ user, onClose, getUsers }) => {

// const [showCreditModal, setShowCreditModal]= useState(false);
// const [showDebitModal, setShowDebitModal]=useState(false);
// const [showEmailModal, setShowEmailModal]=useState(false);

    
//   if (!user) return null;

//   const handleAction = (type) => {
//     // Placeholder: Replace with API call
//     alert(`${type} user: ${user.email}`);





// const suspendUser = async (userId, username) => {
//   // Confirm suspension
//   const confirm = await Swal.fire({
//     title: `Suspend user ${username}?`,
//     text: "This will block the user from his account.",
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#d33',
//     cancelButtonColor: '#3085d6',
//     confirmButtonText: 'Yes, suspend',
//   });

//   if (!confirm.isConfirmed) return;

//   // Show loading
//   Swal.fire({
//     title: 'Suspending...',
//     allowOutsideClick: false,
//     didOpen: () => Swal.showLoading(),
//   });

//   try {
//     const response = await axios.post('https://skylinkteamb.com/api/suspend_user.php', {
//       user_id: userId,
//     });

//     if (response.data.success) {
//       Swal.fire('Success!', response.data.message, 'success');
//       onClose();
//       getUsers();
//     } else {
//       Swal.fire('Failed', response.data.error || 'Could not suspend user.', 'error');
//     }
//   } catch (error) {
//     console.error(error);
//     Swal.fire('Error', 'Something went wrong while suspending the user.', 'error');
//   }
// };



// const unsuspendUser = async (userId, username) => {
//   const confirm = await Swal.fire({
//     title: `Unsuspend user ${username}?`,
//     text: "This will restore the user's access.",
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#28a745',
//     cancelButtonColor: '#3085d6',
//     confirmButtonText: 'Yes, unsuspend',
//   });

//   if (!confirm.isConfirmed) return;

//   Swal.fire({
//     title: 'Unsuspending...',
//     allowOutsideClick: false,
//     didOpen: () => Swal.showLoading(),
//   });

//   try {
//     const response = await axios.post('https://skylinkteamb.com/api/unsuspend_user.php', {
//       user_id: userId,
//     });

//     if (response.data.success) {
//       Swal.fire('Success!', response.data.message, 'success');
//       onClose();
//       getUsers();
//     } else {
//       Swal.fire('Failed', response.data.error || 'Could not unsuspend user.', 'error');
//     }
//   } catch (error) {
//     console.error(error);
//     Swal.fire('Error', 'Something went wrong while unsuspending the user.', 'error');
//   }
// };






// const deleteUser = async (userId, username) => {
//   const confirm = await Swal.fire({
//     title: `Delete user ${username}?`,
//     text: "This will permanently delete the user's account.",
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#d33',
//     cancelButtonColor: '#3085d6',
//     confirmButtonText: 'Yes, delete',
//   });

//   if (!confirm.isConfirmed) return;

//   Swal.fire({
//     title: 'Deleting user...',
//     allowOutsideClick: false,
//     didOpen: () => Swal.showLoading(),
//   });

//   try {
//     const response = await axios.post('https://skylinkteamb.com/api/delete_user.php', {
//       user_id: userId,
//     });

//     if (response.data.success) {
//       Swal.fire('Deleted!', response.data.message, 'success');
//       // Optionally trigger a reload of user list here
//       onClose();
//       getUsers();
//     } else {
//       Swal.fire('Failed', response.data.error || 'Could not delete user.', 'error');
//     }
//   } catch (error) {
//     console.error(error);
//     Swal.fire('Error', 'Something went wrong while deleting the user.', 'error');
//   }
// };





//   return (
//     <ModalOverlay>
//       <ModalContent>
//         <ModalTitle>User Details</ModalTitle>
//         <p><strong>Username:</strong> {user.username}</p>
//         <p><strong>Email:</strong> {user.email}</p>
//         <p><strong>Phone:</strong> {user.phone}</p>
//         <p><strong>Balance:</strong> ${parseFloat(user.balance).toFixed(2)}</p>
//         <p><strong>Country:</strong> {user.country}</p>
//         <p><strong>Created At:</strong> {new Date(user.created_at).toLocaleString()}</p>
     
//         <ModalActions>
//           <Button onClick={() => suspendUser(user.id, user.username)}>Suspend</Button>
//           <Button onClick={() => unsuspendUser(user.id, user.username)}>Unsuspend</Button>
//           <Button onClick={() => deleteUser(user.id, user.username)}>Delete</Button>
//           <Button onClick={() => setShowCreditModal(true)}>Credit Balance</Button>
//           <Button onClick={() => setShowDebitModal(true)}>Debit Balance</Button>
//           <Button onClick={() => setShowEmailModal(true)}>Email User</Button>
//           <Button onClick={onClose}>Cancel</Button>
//         </ModalActions>
//       </ModalContent>

//       {showCreditModal && <CreditUserModal onClose={() => setShowCreditModal(false)} user={user} />}
// {showDebitModal && <DebitUserModal onClose={() => setShowDebitModal(false)} user={user} />}
// {showEmailModal && <EmailUserModal onClose={() => setShowEmailModal(false)} user={user} />}

//     </ModalOverlay>
//   );
// };


// export default ManageUser;






// UserModal.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import axios from 'axios';
import CreditUserModal from './CreditUserModal';
import DebitUserModal from './DebitUserModal';
import EmailUserModal from './EmailUserModal';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 500px;
  width: 100%;
`;

const ModalTitle = styled.h3`
  margin-top: 0;
  color: #000050;
`;

const ModalActions = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Button = styled.button`
  cursor: pointer;
  background: lightgray;
  border: 1px solid #000050;
  color: #000050;
  margin: 2px;
  padding: 6px 10px;
  border-radius: 5px;

  &:hover {
    background: #000050;
    color: white;
  }
`;

const ManageUser = ({ user, onClose, getUsers }) => {
  const [showCreditModal, setShowCreditModal] = useState(false);
  const [showDebitModal, setShowDebitModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);

  if (!user) return null;

  const suspendUser = async (userId, username) => {
    const confirm = await Swal.fire({
      title: `Suspend user ${username}?`,
      text: "This will block the user from his account.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, suspend',
    });

    if (!confirm.isConfirmed) return;

    Swal.fire({ title: 'Suspending...', allowOutsideClick: false, didOpen: () => Swal.showLoading() });

    try {
      const response = await axios.post('https://skylinkteamb.com/api/suspend_user.php', {
        user_id: userId,
      });

      if (response.data.success) {
        Swal.fire('Success!', response.data.message, 'success');
        onClose();
        getUsers();
      } else {
        Swal.fire('Failed', response.data.error || 'Could not suspend user.', 'error');
      }
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'Something went wrong while suspending the user.', 'error');
    }
  };

  const unsuspendUser = async (userId, username) => {
    const confirm = await Swal.fire({
      title: `Unsuspend user ${username}?`,
      text: "This will restore the user's access.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, unsuspend',
    });

    if (!confirm.isConfirmed) return;

    Swal.fire({ title: 'Unsuspending...', allowOutsideClick: false, didOpen: () => Swal.showLoading() });

    try {
      const response = await axios.post('https://skylinkteamb.com/api/unsuspend_user.php', {
        user_id: userId,
      });

      if (response.data.success) {
        Swal.fire('Success!', response.data.message, 'success');
        onClose();
        getUsers();
      } else {
        Swal.fire('Failed', response.data.error || 'Could not unsuspend user.', 'error');
      }
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'Something went wrong while unsuspending the user.', 'error');
    }
  };

  const deleteUser = async (userId, username) => {
    const confirm = await Swal.fire({
      title: `Delete user ${username}?`,
      text: "This will permanently delete the user's account.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete',
    });

    if (!confirm.isConfirmed) return;

    Swal.fire({ title: 'Deleting user...', allowOutsideClick: false, didOpen: () => Swal.showLoading() });

    try {
      const response = await axios.post('https://skylinkteamb.com/api/delete_user.php', {
        user_id: userId,
      });

      if (response.data.success) {
        Swal.fire('Deleted!', response.data.message, 'success');
        onClose();
        getUsers();
      } else {
        Swal.fire('Failed', response.data.error || 'Could not delete user.', 'error');
      }
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'Something went wrong while deleting the user.', 'error');
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalTitle>User Details</ModalTitle>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Balance:</strong> ${parseFloat(user.balance).toFixed(2)}</p>
        <p><strong>Country:</strong> {user.country}</p>
        <p><strong>Created At:</strong> {new Date(user.created_at).toLocaleString()}</p>

        <ModalActions>
          <Button onClick={() => suspendUser(user.id, user.username)}>Suspend</Button>
          <Button onClick={() => unsuspendUser(user.id, user.username)}>Unsuspend</Button>
          <Button onClick={() => deleteUser(user.id, user.username)}>Delete</Button>
          <Button onClick={() => setShowCreditModal(true)}>Credit Balance</Button>
          <Button onClick={() => setShowDebitModal(true)}>Debit Balance</Button>
          <Button onClick={() => setShowEmailModal(true)}>Email User</Button>
          <Button onClick={()=>{onClose();getUsers()}}>Cancel</Button>
        </ModalActions>
      </ModalContent>

      {showCreditModal && <CreditUserModal onClose={() => setShowCreditModal(false)} user={user} getUsers={getUsers}/>}
      {showDebitModal && <DebitUserModal onClose={() => setShowDebitModal(false)} user={user}  getUsers={getUsers}/>}
      {showEmailModal && <EmailUserModal onClose={() => setShowEmailModal(false)} user={user}  getUsers={getUsers}/>}
    </ModalOverlay>
  );
};

export default ManageUser;

