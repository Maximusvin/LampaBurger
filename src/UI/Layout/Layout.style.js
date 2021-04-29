import styled from 'styled-components';

export const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 1283px) {
    width: 940px;
  }

  @media (max-width: 992px) {
    width: 700px;
  }

  @media (max-width: 768px) {
    width: 520px;
  }

  @media (max-width: 576px) {
    width: 90%;
  }
`;
