import * as Styled from "./Navlist.styled";

export default function Navlist(props) {
  return (
    <Styled.Navlist>
      <li className="navlist-item">Courses</li>
      <li className="navlist-item">Levels</li>
      <li className="navlist-item">News</li>
    </Styled.Navlist>
  );
}
