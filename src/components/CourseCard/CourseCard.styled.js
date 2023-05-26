import styled from "styled-components";

export const CourseCard = styled.div`
  margin: auto;
  width: 40rem;
  border-radius: 1rem;
  display: flex;
  box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.5);
  flex-direction: column;
  overflow: hidden;
  transition: all 0.2s ease-out;

  :hover {
    transform: translateY(-2rem);
    box-shadow: 0px 30px 50px 0px rgba(0, 0, 0, 0.5);
  }

  .course-image {
    width: 100%;
    flex: 2;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .course-description {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5rem 1.5rem 2.5rem 1.5rem;

    h2 {
      margin: 0 0 2rem 0;
    }

    &__logistics {
      display: flex;
      justify-content: space-between;

      &__list {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }

      &__buttons {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        .sum-buttons {
          display: flex;

          &__minus {
            font-size: ${({ theme }) => theme.fontSize.xxl};
            width: 2rem;
            text-align: center;
          }

          &__total {
            width: 3rem;
            font-size: 2.2rem;
            text-align: center;
            background-color: grey;
            border-radius: 0.5rem;
          }

          &__plus {
            font-size: ${({ theme }) => theme.fontSize.xxl};
            width: 2rem;
            text-align: center;
          }
        }
        .buy-button {
          padding: 0.3rem;
          text-align: center;
          border-radius: 0.5rem;
          background-color: grey;
          font-size: ${({ theme }) => theme.fontSize.xl};
        }
      }
    }
  }
`;
