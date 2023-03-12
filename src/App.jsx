import React, { useState } from "react";
import blueSoda from "./assets/pepsi001.png";
import whiteSoda from "./assets/pepsi002.png";
import blackSoda from "./assets/pepsi003.png";
import logo from "./assets/logo.png";
import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";
import twitter from "./assets/twitter.png";
import * as S from "./style.js";

export default function App() {
  const [soda, setSoda] = useState(blueSoda);
  const [color,setColor] = useState('#0261bf')
  return (
    <>
      <S.GlobalStyle />
      <S.ColorBox style={{backgroundColor:color}}>
        <S.Header>
          <S.LogoImage src={logo} alt="" />
          <S.NavHeader>
            <ul>
              <li>Home</li>
              <li>Products</li>
              <li>What´s New</li>
              <li>Newsletter</li>
              <li>Contact</li>
            </ul>
          </S.NavHeader>
        </S.Header>
        <S.Main>
          <S.WordsBox>
            <S.MainTitle>
              THAT'S WHAT <span>I LIKE</span>
            </S.MainTitle>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              sapiente aspernatur possimus odio accusantium inventore. Vel
              perferendis molestias a unde eum dolorem officia doloremque!
              Doloribus asperiores quas vitae quisquam libero.
            </p>
            <S.Button>VIEW ALL PRODUCTS</S.Button>
          </S.WordsBox>
          <S.ImageBox>
            <S.SodaImage src={soda} />
          </S.ImageBox>
          <S.SocialMediaBox>
            <S.FigureSocialMedia>
            <S.SocialMediaImage src={facebook} alt="" />
            <S.SocialMediaImage src={twitter} alt="" />
            <S.SocialMediaImage src={instagram} alt="" />
            </S.FigureSocialMedia>
          </S.SocialMediaBox>
        </S.Main>
        <S.ChangeBox>
          <img src={blueSoda} onClick={()=>{
            setColor('#0261bf')
            setSoda(blueSoda)
          }} alt="" />
          <img src={whiteSoda} onClick={()=>{
            setColor('#E60C2D')
            setSoda(whiteSoda)
          }} alt="" />
          <img src={blackSoda} onClick={()=>{
            setColor('#1F1E1F')
            setSoda(blackSoda)
          }} alt="" />
        </S.ChangeBox>
      </S.ColorBox>
    </>
  );
}
