import * as Styled from "./CourseCard.styled";

export default function CourseCard(props) {
  return (
    <Styled.CourseCard>
      <figure className="course-image">
        <img src="assets/images/web-summit.png" alt="" />
      </figure>
      <div className="course-description">
        <h2>Web Summit Success: Startuper's Dream</h2>
        <div className="course-description__logistics">
          <div className="course-description__logistics__list">
            <p>
              DURATION: <strong>10 Hours</strong>
            </p>
            <p>STAGE: Web Summit</p>
            <p>PRICE: Half a Liver</p>
          </div>
          <div className="course-description__logistics__buttons">
            <div className="sum-buttons">
              <div className="sum-buttons__minus">-</div>
              <div className="sum-buttons__total">0</div>
              <div className="sum-buttons__plus">+</div>
            </div>
            <button className="buy-button">Buy</button>
          </div>
        </div>
      </div>
    </Styled.CourseCard>
  );
}
