import styled from "styled-components";

export const ButtonIconMinicart = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 24px;
  right: 40px;
  cursor: pointer;

  span {
    position: absolute;
    right: 0;
    width: 20px;
    height: 20px;
    background-color: #2636af;
    border-radius: 50%;
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    line-height: 20px;
  }
  img {
    width: 38px;
  }
  @media (max-width: 768px) {
    right: 24px;

    img {
      width: 32px;
    }
  }
`;
