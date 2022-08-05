import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  span {
    display: block;
    margin: 0;
    position: absolute;
    top: 100%;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    width: auto;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  height: 28px;

  button {
    padding: 0 10px;
  }
`;

export const Input = styled.input`
  width: 200px;
  height: 28px;
  border: none;
  border-radius: 5px 0 0 5px;
  color: #999;
  outline: none;
  padding: 0 10px;
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
`