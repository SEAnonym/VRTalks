import styled from "styled-components";

export const Hero = styled.main`
  margin-top: 3rem;
  width: 100vw;
  height: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;
  .hero-slogan {
    min-height: 100%;
    color: ${({ theme }) => theme.colors.text};

    &-word {
      font-size: 8rem;
      font-weight: 700;
    }
  }
  .hero-image-container {
    img {
      box-shadow: 47px 27px 100px -1px rgba(0, 0, 0, 0.75);
      border-radius: 1rem;
    }
  }
`;
