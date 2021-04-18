import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: hsla(0, 0%, 78%, 0.5);
  z-index: 1000;
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 900px;
  background-color: #1d1d1d;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  @media (max-width: 992px) {
    width: 750px;
  }

  @media (max-width: 768px) {
    width: 520px;
  }

  @media (max-width: 576px) {
    width: 320px;
  }
`;
