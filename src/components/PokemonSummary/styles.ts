import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
  padding: 08px;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  background-color: #dfe9e9;
  width: 20%;

  button {
    color: #fff;
    transition: all 0.1s ease-in-out;
    &:hover {
      background-color: #ffcc00;
      color: #000;
    }
  }

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 768px) {
    width: 40%;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;

  h3 {
    font-size: 24px;
    text-transform: capitalize;
  }
`;
