import styled from 'styled-components';

export const ProductListContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`