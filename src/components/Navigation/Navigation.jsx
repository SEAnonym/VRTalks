import { GiVrHeadset } from "react-icons/gi";
import * as Styled from "./Navigation.styled";

export default function Navigation(props) {
  return (
    <Styled.Navigation>
      <div className="logo-container">
        <figure className="icon-container">
          <GiVrHeadset className="icon-logo" />
        </figure>
        <h1>VRTalks</h1>
      </div>
      <ul className="nav-list">
        <li className="nav-list-item">Courses</li>
        <li className="nav-list-item">Levels</li>
        <li className="nav-list-item">Blog</li>
      </ul>
    </Styled.Navigation>
  );
}
