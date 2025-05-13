
import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    text: "Elite Wealth Global completely changed my financial future. Their team helped me diversify my investments and now I feel confident about retirement.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Mark Robinson",
    position: "Entrepreneur, United States",
  },
  {
    text: "I was hesitant to invest internationally, but the advisors at Elite Wealth made the process so clear and secure. I've seen impressive returns within months.",
    image: "https://randomuser.me/api/portraits/women/16.jpg",
    name: "Anita Fernandez",
    position: "Real Estate Developer, Mexico",
  },
  {
    text: "Their personalized financial strategies helped me grow my portfolio while minimizing risk. I trust them with every major investment decision now.",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
    name: "Richard Kim",
    position: "Tech Consultant, Singapore",
  },
  {
    text: "As a new investor, I was overwhelmed. Elite Wealth guided me through every step with patience and clarity. I'm so glad I started this journey with them.",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
    name: "Sara Ahmed",
    position: "Marketing Executive, UAE",
  },
  {
    text: "Their global expertise helped me allocate funds into emerging markets I hadn’t considered before. The results speak for themselves.",
    image: "https://randomuser.me/api/portraits/men/43.jpg",
    name: "Carlos Mendes",
    position: "Private Investor, Brazil",
  },
  {
    text: "I was looking for a partner who could grow my family's wealth responsibly. Elite Wealth Global did exactly that and more.",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    name: "Olivia Chen",
    position: "Wealth Heir & Philanthropist, Hong Kong",
  },
];

const Testimonial2 = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <CarouselContainer>
      <Title>What Clients Say</Title>
      <StyledSlider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <CardInner>
              <QuoteIcon>
                <FaQuoteLeft />
              </QuoteIcon>
              <TestimonialText>{testimonial.text}</TestimonialText>
              <CustomerImage src={testimonial.image} alt={testimonial.name} />
            </CardInner>
            <CustomerName>{testimonial.name}</CustomerName>
            <CustomerPosition>{testimonial.position}</CustomerPosition>
          </Card>
        ))}
      </StyledSlider>
    </CarouselContainer>
  );
};

export default Testimonial2;

// Styled Components

const CarouselContainer = styled.div`
  background-color: #0a1a2f;
  width: 100%;
  margin: 0 auto;
  padding: 100px 50px;
  border-top: 4px solid #1f4e8c;
`;

const Title = styled.h1`
  color: #dfe8ff;
  text-align: center;
  margin-bottom: 40px;
  font-size: 2rem;
  font-weight: 600;
`;

const StyledSlider = styled(Slider)`
  .slick-prev,
  .slick-next {
    z-index: 10;
  }
  .slick-prev:before,
  .slick-next:before {
    font-size: 32px;
    color: #91c4ff;
  }

  .slick-slide {
    padding: 0 10px;
  }
`;

const Card = styled.div`
  background: transparent;
  text-align: center;
  margin: 0 auto;
`;

const CardInner = styled.div`
  background: #132b4c;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 50, 0.7);
  width: 100%;
  height: 300px;
  position: relative;
  color: #dfe8ff;

  @media (max-width: 884px) {
    height: 350px;
  }

  @media (max-width: 834px) {
    height: 400px;
  }

  @media (max-width: 428px) {
    height: 300px;
  }

  @media (max-width: 360px) {
    height: 350px;
  }
`;

const QuoteIcon = styled.div`
  font-size: 30px;
  color: #91c4ff;
  margin-bottom: 10px;
`;

const TestimonialText = styled.p`
  font-size: 1.2rem;
  line-height: 1.4;
  color: #e0eafc;
  margin-bottom: 15px;
`;

const CustomerImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #91c4ff;
`;

const CustomerName = styled.h4`
  font-size: 16px;
  font-weight: bold;
  margin-top: 40px;
  color: #dfe8ff;
`;

const CustomerPosition = styled.p`
  font-size: 12px;
  color: #a5b9d6;
`;
