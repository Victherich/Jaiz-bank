
import React from 'react';
import styled from 'styled-components';
import pauliImg from '../Images2/t1.jpeg';
import ullaImg from '../Images2/t3.jpeg';
import petterImg from '../Images2/t4.jpeg';
import reimaImg from '../Images2/t2.jpeg';
import annareettaImg from '../Images2/t1.jpeg'; // Add all images to your project folder

const TeamSection = styled.section`
//   background: #ffffff;
  padding: 4rem 2rem;
  font-family: 'Segoe UI', sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #000050;
  margin-bottom: 0.5rem;
`;

const SubText = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: #555;
  max-width: 700px;
  margin: 0 auto 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: #000050;
  color: white;
  border-radius: 16px;
  padding: 2rem 1rem;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 3px solid gold;
`;

const Name = styled.h3`
  margin: 0.5rem 0 0.2rem;
  font-size: 1.3rem;
  color: gold;
`;

const Position = styled.p`
  font-size: 1rem;
  color: #ddd;
`;

const teamMembers = [
    { name: 'Reima Rytsölä', title: 'CEO', img: reimaImg },
  { name: 'Pauli Anttila', title: 'Investment Director', img: pauliImg },
  { name: 'Ulla Palmunen', title: 'General Councel', img: ullaImg },
  { name: 'Petter Söderström', title: 'Investment Director', img: petterImg },
  
  { name: 'Annareetta Lumme-Timonen', title: 'Investment Director', img: annareettaImg },
];

const Team = () => {
  return (
    <TeamSection>
      <Title>👥 Meet Our Expertise</Title>
      <SubText>
        We don’t just help one kind of person. Or one kind of business. Or one kind of nonprofit, family, or trustee. We have a variety of plans for many different investors or traders, and we may just have an account for you.
      </SubText>
      <Grid>
        {teamMembers.slice(0,4).map((member, index) => (
          <Card key={index}>
            <Avatar src={member.img} alt={member.name} />
            <Name>{member.name}</Name>
            <Position>{member.title}</Position>
          </Card>
        ))}
      </Grid>
    </TeamSection>
  );
};

export default Team;
