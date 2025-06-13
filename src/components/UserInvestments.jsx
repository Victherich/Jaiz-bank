
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';

// const Container = styled.div`
//   padding: 20px;
//   max-width: 1200px;
//   margin: 0 auto;
//   background-color: #f9f9f9;
//   border-radius: 8px;
// `;

// const Title = styled.h2`
//   text-align: center;
//   color: #333;
//   font-size: 1.8rem;
//   margin-bottom: 20px;
// `;

// const InvestmentList = styled.ul`
//   list-style: none;
//   padding: 0;
// `;

// const InvestmentCard = styled.li`
//   background-color: white;
//   padding: 20px;
//   margin-bottom: 15px;
//   border-radius: 8px;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: scale(1.02);
//   }
// `;

// const InvestmentHeader = styled.h3`
//   color: #000;
//   font-size: 1.4rem;
//   margin-bottom: 10px;
// `;

// const InvestmentDetails = styled.p`
//   color: #555;
//   font-size: 1rem;
//   margin: 5px 0;
// `;

// const LoadingText = styled.div`
//   text-align: center;
//   color: #333;
//   font-size: 1.5rem;
// `;

// const ErrorText = styled.div`
//   color: red;
//   font-size: 1.2rem;
//   text-align: center;
// `;

// const UserInvestments = ({ userId }) => {
//   const [investments, setInvestments] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchInvestments = async () => {
//       setLoading(true);
//       try {
//         const res = await axios.post('https://skylinkteamb.com/api/fetch_user_investments.php', {
//           user_id: userId
//         });
//         if (res.data.success) {
//           setInvestments(res.data.investments);
//         } else {
//           setError(res.data.error || 'Failed to fetch investments');
//         }
//       } catch (err) {
//         setError('Error fetching data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (userId) {
//       fetchInvestments();
//     }
//   }, [userId]);

//   if (loading) return <LoadingText>Loading investments...</LoadingText>;
//   if (error) return <ErrorText>Error: {error}</ErrorText>;

//   return (
//     <Container>
//       <Title>Your Investments</Title>
//       <InvestmentList>
//         {investments.map((investment) => (
//           <InvestmentCard key={investment.investment_id}>
//             <InvestmentHeader>{investment.plan_name}</InvestmentHeader>
//             <InvestmentDetails>Amount: ${investment.amount}</InvestmentDetails>
//             <InvestmentDetails>ROI: {investment.roi}</InvestmentDetails>
//             <InvestmentDetails>Status: {investment.status}</InvestmentDetails>
//             <InvestmentDetails>Payouts Done: {investment.payouts_done}/{investment.duration}</InvestmentDetails>
//             <InvestmentDetails>Next Payout: {investment.next_payout ? new Date(investment.next_payout).toLocaleString() : 'N/A'}</InvestmentDetails>
//             <InvestmentDetails>Created At: {new Date(investment.created_at).toLocaleString()}</InvestmentDetails>
//             {investment.approved_at && <InvestmentDetails>Approved At: {new Date(investment.approved_at).toLocaleString()}</InvestmentDetails>}
//           </InvestmentCard>
//         ))}
//       </InvestmentList>
//     </Container>
//   );
// };

// export default UserInvestments;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 8px;

  @media(max-width:428px){
    padding:5px;
  }
 
`;


const Title = styled.h2`
  text-align: center;
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 20px;
`;
const TableContainer = styled.div`
  width:100%;
  height:300px;
  overflow:scroll;
 
` 
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
   
`;

const TableHeader = styled.th`
  background-color: #000050;
  color: white;
  padding: 12px;
  font-size: 0.7rem;
  text-align: left;
  border: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  &:hover {
    background-color: #f0f0f0;
  }
`;

const TableCell = styled.td`
  padding: 12px;
  font-size: 0.8rem;
  text-align: left;
  border: 1px solid #ddd;
`;

const LoadingText = styled.div`
  text-align: center;
  color: #333;
  font-size: 1.5rem;
`;

const ErrorText = styled.div`
  color: #222;
  font-size: 1.2rem;
  text-align: center;
`;

const UserInvestments = ({ userId }) => {
  const [investments, setInvestments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

 
    const fetchInvestments = async () => {
      setLoading(true);
      try {
        const res = await axios.post('https://skylinkteamb.com/api/fetch_user_investments.php', {
          user_id: userId
        });
        if (res.data.success) {
          setInvestments(res.data.investments);
        } else {
          setError(res.data.error || 'Failed to fetch investments');
        }
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };



    useEffect(() => {
    if (userId) {
      fetchInvestments();
    }
  }, [userId]);


  useEffect(() => {
      fetchInvestments();
  }, []);


  useEffect(()=>{
    const id = setInterval(()=>{
      fetchInvestments();
    },10000);
    return ()=>clearInterval(id)
  },[])


  if (loading) return <LoadingText>Loading investments...</LoadingText>;
  if (error) return <ErrorText>{error}</ErrorText>;

  return (
    <Container>
      <Title>Your Investments</Title>
    <TableContainer>
    <Table>
        <thead>
          <tr>
            <TableHeader>Plan Name</TableHeader>
            <TableHeader>Amount</TableHeader>
            <TableHeader>ROI</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Payouts Done</TableHeader>
            {/* <TableHeader>Next Payout</TableHeader> */}
            <TableHeader>Created At</TableHeader>
            <TableHeader>Approved At</TableHeader>
          </tr>
        </thead>
        <tbody>
  {investments
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .map((investment) => (
      <TableRow key={investment.investment_id}>
        <TableCell>{investment.plan_name}</TableCell>
        <TableCell>${investment.amount}</TableCell>
        <TableCell>{investment.roi}</TableCell>
        <TableCell>{investment.status}</TableCell>
        <TableCell>{investment.payouts_done}/{investment.duration}</TableCell>
        {/* <TableCell>{investment.next_payout ? new Date(investment.next_payout).toLocaleString() : 'N/A'}</TableCell> */}
        <TableCell>{new Date(investment.created_at).toLocaleString()}</TableCell>
        <TableCell>{investment.approved_at ? new Date(investment.approved_at).toLocaleString() : 'N/A'}</TableCell>
      </TableRow>
    ))}
</tbody>

      </Table>
    </TableContainer>
    </Container>
  );
};

export default UserInvestments;

