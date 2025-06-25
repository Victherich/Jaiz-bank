
import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    text: "Jiz Bank Plc transformed the way I manage my finances. With their expert support, I’ve built a stronger and more secure future for my family.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "David Okoro",
    position: "Business Owner, Nigeria",
  },
  {
    text: "I never imagined banking could be this personal and empowering. Jiz’s team guided me through investments I used to find intimidating.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Camila Torres",
    position: "Interior Designer, Colombia",
  },
  {
    text: "Thanks to Jiz Bank's tailored financial solutions, I've grown my savings confidently and responsibly. They’ve earned my full trust.",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    name: "Jae Min Park",
    position: "Software Engineer, South Korea",
  },
  {
    text: "As a first-time investor, I had so many questions. Jiz’s advisors were incredibly patient, transparent, and helpful every step of the way.",
    image: "https://randomuser.me/api/portraits/women/25.jpg",
    name: "Fatima Yusuf",
    position: "HR Manager, United Arab Emirates",
  },
  {
    text: "Jiz Bank opened doors to opportunities I hadn't considered. Their insights into ethical and smart investment strategies are unmatched.",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
    name: "Liam Thompson",
    position: "Independent Consultant, Australia",
  },
  {
    text: "I was looking for a reliable bank that aligned with my values. Jiz offered exactly that—professionalism, transparency, and results.",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
    name: "Mei Lin Wu",
    position: "Philanthropist & Investor, Malaysia",
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
  background-color:  #3C9E37;
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
  background: #2C4B2F;
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
