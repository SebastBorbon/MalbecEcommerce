import { useState, useEffect } from "react";
import "./Slider.css";
import styled from "styled-components";
import { sliderItems } from "../../data";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    let isMounted = true;
    const SliderMove = () => {
      if (slideIndex < sliderItems.length - 1) {
        if (isMounted) return setSlideIndex(slideIndex + 1);
      } else {
        setSlideIndex(0);
      }
    };
    setTimeout(SliderMove, 3000);

    return () => {
      isMounted = false;
    };
  }, [slideIndex]);

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
                <Link
                  to="/products/shoes
                "
                >
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
