
// import React, { useState } from 'react';
// import styled from 'styled-components';

// const Overlay = styled.div`
//   position: fixed; top: 0; left: 0;
//   width: 100%; height: 100%;
//   background: rgba(0,0,0,0.6);
//   display: flex; justify-content: center; align-items: center;
// `;

// const Content = styled.div`
//   background: white;
//   padding: 2rem;
//   border-radius: 12px;
//   width: 100%; max-width: 500px;
// `;

// const Title = styled.h3`
//   margin: 0 0 1rem;
//   color: #000050;
// `;

// const TextArea = styled.textarea`
//   width: 100%;
//   height: 150px;
//   padding: 10px;
//   font-size: 1rem;
// `;

// const Actions = styled.div`
//   margin-top: 1rem;
//   display: flex;
//   justify-content: flex-end;
//   gap: 10px;
// `;

// const Button = styled.button`
//   background: ${props => props.primary ? '#000050' : 'lightgray'};
//   color: ${props => props.primary ? 'white' : '#000050'};
//   border: 1px solid #000050;
//   padding: 8px 14px;
//   border-radius: 6px;
//   cursor: pointer;

//   &:hover {
//     background: ${props => props.primary ? '#202070' : '#ccc'};
//   }
// `;

// const EmailUserModal = ({ onClose, user,  getUsers }) => {
//   const [message, setMessage] = useState('');

//   return (
//     <Overlay>
//       <Content>
//         <Title>Email {user.username}</Title>
//         <p>Write a message to send to: <strong>{user.email}</strong></p>
//         <TextArea value={message} onChange={e => setMessage(e.target.value)} />
//         <Actions>
//           <Button onClick={onClose}>Cancel</Button>
//           <Button primary onClick={() => alert(`Send message to ${user.username}: ${message}`)}>Send</Button>
//         </Actions>
//       </Content>
//     </Overlay>
//   );
// };

// export default EmailUserModal;




import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Swal from 'sweetalert2';

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Content = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
`;

const Title = styled.h3`
  margin: 0 0 1rem;
  color: #000050;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: vertical;
`;

const Actions = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const Button = styled.button`
  background: ${props => props.primary ? '#000050' : 'lightgray'};
  color: ${props => props.primary ? 'white' : '#000050'};
  border: 1px solid #000050;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${props => props.primary ? '#202070' : '#ccc'};
  }
`;

const EmailUserModal = ({ onClose, user, getUsers }) => {
  const [message, setMessage] = useState('');

  const handleSendEmail = async () => {
    if (!message.trim()) {
      Swal.fire('Empty Message', 'Please write a message before sending.', 'warning');
      return;
    }

    const confirm = await Swal.fire({
      title: `Send email to ${user.username}?`,
      text: `Email will be sent to ${user.email}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, send it',
    });

    if (!confirm.isConfirmed) return;

    Swal.fire({
      title: 'Sending...',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      const res = await axios.post('https://jizbankplc.com/api/send_email.php', {
        user_id: user.id,
        message: message.trim(),
      });

      if (res.data.success) {
        Swal.fire('Sent', res.data.message, 'success');
        setMessage('');
        onClose();
        if (typeof getUsers === 'function') getUsers(); // optional refresh
      } else {
        Swal.fire('Error', res.data.error || 'Failed to send email.', 'error');
      }
    } catch (err) {
      console.error(err);
      Swal.fire('Error', 'Something went wrong. Try again.', 'error');
    }
  };

  return (
    <Overlay>
      <Content>
        <Title>Email {user.username}</Title>
        <p>
          Write a message to send to: <strong>{user.email}</strong>
        </p>
        <TextArea
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Type your message here..."
        />
        <Actions>
          <Button onClick={onClose}>Cancel</Button>
          <Button primary onClick={handleSendEmail}>Send</Button>
        </Actions>
      </Content>
    </Overlay>
  );
};

export default EmailUserModal;
