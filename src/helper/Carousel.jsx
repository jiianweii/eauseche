import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledCarousel = styled.div`
  display: flex;
  height: 100dvh;
  overflow-x: auto;
  cursor: grab;
  transition: 2s linear 1s;
  &:active {
    cursor: grabbing;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledSlider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;

  & img {
    height: 100%;
    width: 100vw;
    object-fit: cover;
  }
`;

const StyledHeaderDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  color: ${(props) => props.color || "black"};
  & h1 {
    font-size: 5rem;
  }
  & p {
    font-size: 1.5rem;
  }
  & button {
    width: 18rem;
    padding: 1rem;
    border: none;
    background-color: #000;
    color: #fff;
    font-weight: 600;
    letter-spacing: 2px;
    font-size: 2rem;
    cursor: pointer;
  }
`;

export default function Carousel() {
  const navigate = useNavigate();
  const slideRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const mouseCoords = useRef({
    startX: 0,
    scrollLeft: 0,
  });
  const HandleMouseLeave = () => {
    setIsDragging(false);
    ChangeCarouselIndex();
  };
  const HandleMouseDown = (e) => {
    setIsDragging(true);
    const startX = e.pageX - slideRef.current.offsetLeft;
    const scrollLeft = slideRef.current.scrollLeft;
    mouseCoords.current = { startX, scrollLeft };
  };

  const HandleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - slideRef.current.offsetLeft;
    const walkX = (x - mouseCoords.current.startX) * 1.5;
    slideRef.current.scrollLeft = mouseCoords.current.scrollLeft - walkX;
  };
  const HandleMouseUp = (e) => {
    setIsDragging(false);
    ChangeCarouselIndex();
  };

  const ChangeCarouselIndex = () => {
    const itemWidth = slideRef.current.children[0].offsetWidth; // Assuming all items have the same width
    const scrollPosition = slideRef.current.scrollLeft;

    const index = Math.round(scrollPosition / itemWidth);

    slideRef.current.scrollTo({
      left: index * itemWidth,
      behavior: "smooth",
    });
  };

  return (
    <StyledCarousel
      ref={slideRef}
      onMouseDown={HandleMouseDown}
      onMouseUp={HandleMouseUp}
      onMouseMove={HandleMouseMove}
      onMouseLeave={HandleMouseLeave}
    >
      <StyledSlider>
        <img src="./slider-1.jpg" draggable="false" />
        <StyledHeaderDiv>
          <StyledHeader>
            <h1>Women's Collection</h1>
            <p>From Dresses, Blouses, T-Shirts, Skirts, and more!</p>
            <button onClick={() => navigate("/women")}>SHOP NOW</button>
          </StyledHeader>
        </StyledHeaderDiv>
      </StyledSlider>
      <StyledSlider>
        <img src="./slider-2.jpg" draggable="false" />
        <StyledHeaderDiv>
          <StyledHeader color="white">
            <h1>Men's Collection</h1>
            <p>From Suits, Shirts, Jeans, Pants, and more!</p>
            <button onClick={() => navigate("/men")}>SHOP NOW</button>
          </StyledHeader>
        </StyledHeaderDiv>
      </StyledSlider>
      <StyledSlider>
        <img src="./slider-3.png" draggable="false" />
        <StyledHeaderDiv>
          <StyledHeader>
            <h1>Child's Collection</h1>
            <p>From Overalls, Shirts, Shorts, and more!</p>
            <button onClick={() => navigate("/kids")}>SHOP NOW</button>
          </StyledHeader>
        </StyledHeaderDiv>
      </StyledSlider>
      <StyledSlider>
        <img src="./slider-4.jpg" draggable="false" />
        <StyledHeaderDiv>
          <StyledHeader>
            <h1>Toddler's Collection</h1>
            <p>From Jumpsuits, Shirts, Shorts, Skirts, and more!</p>
            <button onClick={() => navigate("/toddlers")}>SHOP NOW</button>
          </StyledHeader>
        </StyledHeaderDiv>
      </StyledSlider>
    </StyledCarousel>
  );
}
