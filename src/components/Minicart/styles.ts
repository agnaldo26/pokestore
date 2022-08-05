import styled from "styled-components";

export const MinicartContainer = styled.section`
  width: 332px;
  display: flex;
  flex-direction: column;
  background-color: #d2d0b9;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 16px;
  position: fixed;
  height: calc(100vh - 25%);
  top: 0;
  right: 0;
  z-index: 2;
  box-sizing: border-box;
  transition: all 0.4s ease-in-out;

  &.is--open {
    transform: translateY(0);
  }
  &.is--closed {
    transform: translateY(-100%);
  }
`;

export const MinicartContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const MinicartHeader = styled.header`
  h3 {
    font-size: 24px;
    color: #000;
    margin: 0;
    text-align: center;

    span {
      font-size: 18px;
      margin-left: 4px;
    }
  }
`;

export const CloseMinicart = styled.button`
  cursor: pointer;
  font-size: 16px;
  background-color: #2636af;
  border: none;
  color: #fff;
  width: 22px;
  height: 22px;
  border-radius: 100%;
`;

export const MinicartListItems = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 24px;
  overflow-y: auto;
  background-color: #d2d0b9;
  padding: 8px;

  ::-webkit-scrollbar {
    width: 6px;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 40px;
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #dfe9e9;
    border-radius: 40px;
    height: 10px;
  }
`;

export const MinicartListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  button {
    background-color: unset;
    color: #000;
    padding: 0;
    border-radius: 0;
    font-size: 16px;
    border-radius: 100%;
  }
`;

export const MinicartFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
`;

export const MinicartTotalValue = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 24px;
    font-weight: 500;
    color: #000;
  }
`;

export const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 14px;
  
  &:hover {
    cursor: pointer;
  }
`