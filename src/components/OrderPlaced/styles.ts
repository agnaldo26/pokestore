import styled from "styled-components";

export const OrderPlacedContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 10px;
  padding: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    text-align: center;
    margin-top: 0;
  }

  @media (max-width: 768px) {
    padding: 24px;
    width: 70%;
  }
`;

export const Button = styled.button`
  width: auto;
  padding: 10px;
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }
`;

export const CloseModal = styled.button`
  cursor: pointer;
  font-size: 16px;
  border: none;
  color: #000;
  font-size: 24px;
  background-color: unset;
  position: absolute;
  top: 16px;
  right: 32px;
  @media (max-width: 768px) {
    top: 8px;
    right: 16px;
  }
`;
