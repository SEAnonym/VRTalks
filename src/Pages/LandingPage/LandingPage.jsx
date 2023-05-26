import * as Styled from "./LandingPage.styled";
import { Navigation, Hero } from "../../components";

export default function LandingPage(props) {
  return (
    <Styled.LandingPage>
      <Navigation />
      <Hero />
    </Styled.LandingPage>
  );
}
