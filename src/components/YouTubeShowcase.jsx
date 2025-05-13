import React from 'react';
import styled from 'styled-components';
import { FaYoutube } from 'react-icons/fa';

const Container = styled.div`
  background-color: #f4f7fc;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

const Title = styled.h2`
  color: #000050;
  font-size: 2.2rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const VideoMock = styled.div`
  width: 100%;
  max-width: 800px;
  aspect-ratio: 16 / 9;
  background: #000;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  margin-bottom: 25px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover::after {
    background-color: rgba(0,0,0,0.4);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0,0,0,0.2);
    transition: background-color 0.3s ease;
  }
`;

const PlayIcon = styled(FaYoutube)`
  color: white;
  font-size: 64px;
  z-index: 2;
`;

const VisitButton = styled.a`
  padding: 12px 24px;
  background-color: #000050;
  color: white;
  font-size: 16px;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1b1f78;
  }
`;

const YouTubeShowcase = () => {
  const openYouTube = () => {
    window.open('https://www.youtube.com/@EliteWealthGlobal', '_blank');
  };

  return (
    <Container>
      <Title>Explore Elite Wealth Global on YouTube</Title>
      <VideoMock onClick={openYouTube}>
        <PlayIcon />
      </VideoMock>
      {/* <VisitButton
        href="https://www.youtube.com/@EliteWealthGlobal"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Our YouTube Channel
      </VisitButton> */}
    </Container>
  );
};

export default YouTubeShowcase;
