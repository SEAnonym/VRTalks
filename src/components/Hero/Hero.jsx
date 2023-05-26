import * as Styled from "./Hero.styled";

export default function Hero(props) {
  return (
    <Styled.Hero>
      <div className="hero-slogan">
        <p className="hero-slogan-word">Speak</p>
        <p className="hero-slogan-word">with</p>
        <p className="hero-slogan-word">Confidence,</p>
        <p className="hero-slogan-word">Virtually</p>
      </div>
      <figure className="hero-image-container">
        <img src="assets/images/web-summit.png" alt="" />
      </figure>
    </Styled.Hero>
  );
}
