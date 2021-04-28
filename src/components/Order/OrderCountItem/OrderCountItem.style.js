import styled from 'styled-components';

export const ControlWrap = styled.div`
  position: relative;
  width: 56px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Input = styled.input`
  height: 28px;
  width: 28px;
  border-radius: 14px;
  position: absolute;
  left: 14px;
  bottom: 0;
  text-align: center;
  vertical-align: middle;
  line-height: 28px;
  background: rgba(15, 15, 15, 0.75294);
  font-size: 16px;
  font-weight: 700;
  z-index: 5;
  border: none;
  outline: none;
  color: #f4f4f4;
`;

export const ButtonIncrement = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.4, 0.01, 0.63, 1);
  z-index: 10;
  color: #000000;
  font-size: 26px;
  line-height: 15px;
  background: #ffd900;
  bottom: 6px;
`;

export const ButtonDecrement = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.4, 0.01, 0.63, 1);
  z-index: 10;
  color: #000000;
  font-size: 20px;
  line-height: 15px;
  background: #ffd900;
  bottom: 6px;
`;
