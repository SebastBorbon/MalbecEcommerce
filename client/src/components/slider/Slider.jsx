import { useState } from "react";
import "./Slider.css";
import styled from "styled-components";
import { sliderItems } from "../../data";
import { Link } from "react-router-dom";

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #cfcfcf;
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 2;
  margin-left: 65px;
  margin-top: 60px;
  width: 100%;
`;

const Image = styled.img`
  height: 80%;
  border-radius: 10px;
  width: 100%;
  object-fit: cover;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const SliderMove = () => {
    slideIndex < sliderItems.length - 1
      ? setSlideIndex(slideIndex + 1)
      : setSlideIndex(0);
  };

  setTimeout(SliderMove, 4000);

  return (
    <div className="Slider-Container">
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => {
          return (
            <Slide background={item.background} key={item.id}>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
              <div className="InfoContainer">
                <h1 className="InfoTitle">{item.title}</h1>
                <p className="InfoDescription">{item.description}</p>
                <Link to="/products/shoes">
                  <button className="InfoButton">Shop Now</button>
                </Link>
              </div>
            </Slide>
          );
        })}
      </Wrapper>
    </div>
  );
};

export default Slider;
