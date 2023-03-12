import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
}
`;
export const ColorBox = styled.div`
  display: flex;
  flex-direction: column;
  transition: ease-in-out 0.6s;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 19vh;
`;
export const LogoImage = styled.img`
  width: 6.5vw;
`;
export const NavHeader = styled.nav`
  width: 45vw;
  margin-left: 32vw;
  ul {
    display: flex;
    list-style: none;
    justify-content: space-around;
  }
  li {
    font-family: "Poppins", sans-serif;
    cursor: pointer;
    font-size: 20px;
    color: #ffff;
    &:hover {
      transform: scale(108%);
      opacity: 0.5;
    }
  }
`;
export const Main = styled.main`
  display: flex;
  align-items: flex-end;
  height: 81vh;
`;
export const WordsBox = styled.section`
  width: 50%;
  height: 71vh;
  margin-left: 4.4vw;
  p {
    color: #ffff;
    width: 38.5vw;
    font-size: 16px;
    font-family: "Poppins", sans-serif;
  }
`;
export const MainTitle = styled.h1`
  font-size: 3em;
  width: 26.5vw;
  font-family: "Poppins", sans-serif;
  line-height: 1.5em;
  letter-spacing: 1px;
  color: #fff;
  span {
    font-size: 2em;
  }
`;
export const Button = styled.button`
  width: 14vw;
  height: 6vh;
  border-radius: 20px;
  border: none;
  margin-top: 2vh;
  color: #000000;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 16px;
  background-color: #e4e2e4;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
    transform: scale(105%);
  }
`;
export const ImageBox = styled.figure`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 80vh;
  width: 32%;
`;
export const SodaImage = styled.img`
  width: 18vw;
`;
export const SocialMediaBox = styled.aside`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 13vw;
  height: 80vh;
  padding-bottom: 5vh;
`;
export const FigureSocialMedia = styled.figure`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 35vh;
  margin-right: 2vw;
`;
export const SocialMediaImage = styled.img`
  position: relative;
  cursor: pointer;
  transition: ease-in-out 0.6s;
  top: 0vh;
  &:hover {
    top: -4px;
    opacity: 0.5;
  }
`;
export const ChangeBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  position: absolute;
  right: 39vw;
  width: 25%;
  height: 100vh;
  img {
    position: relative;
    width: 3.5vw;
    cursor: pointer;
    top: -2vh;
    transition: ease-in-out 0.6s;
    &:hover {
      top: -4.5vh;
    }
  }
`;
