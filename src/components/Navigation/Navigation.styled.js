import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0 2rem 0;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-left: 2rem;

    h1 {
      color: ${({ theme }) => theme.colors.light};
      font-size: ${({ theme }) => theme.fontSize.xxl};
    }
    .icon-container {
      width: fit-content;
      height: fit-content;

      .icon-logo {
        width: 6rem;
        height: 60%;
        color: hsla(316, 41%, 93%, 1);
      }
    }
  }

  .nav-list {
    margin: 0 10rem 0 10rem;
    width: 30vw;
    height: 5vw;

    display: flex;
    justify-content: space-between;
    align-items: center;

    &-item {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
`;
