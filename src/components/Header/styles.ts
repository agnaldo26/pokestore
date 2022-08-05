import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  background-color: #d2d0b9;
  position: sticky;
  top: 0;
  z-index: 1;

  @media (max-width: 768px) {
    height: 116px;
    gap: 16px;
    flex-wrap: wrap;
    padding: 8px 8px 16px;
    flex-direction: column;
  }
`;
