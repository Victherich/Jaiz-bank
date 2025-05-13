
import React from 'react';
import media1 from '../Images3/media1.mp4'
import styled from 'styled-components'


const Div = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
background:rgba(0,0,0,0.9);
// height:500px;

video{
    object-fit:cover;
    // width:100%;
}
`

const AutoPlayVideo = () => {
  return (
    <Div>
      <video
        src={media1} // Replace with your own video URL
        autoPlay
        muted
        loop
        controls
    
      >
        Your browser does not support the video tag.
      </video>
    </Div>
  );
};

export default AutoPlayVideo;
