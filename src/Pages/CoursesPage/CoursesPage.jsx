import * as Styled from "./CoursesPage.styled";
import { Navigation, CourseCard } from "../../components/index";

export default function CoursesPage(props) {
  return (
    <Styled.CoursesPage>
      <Navigation />
      <CourseCard />
    </Styled.CoursesPage>
  );
}
