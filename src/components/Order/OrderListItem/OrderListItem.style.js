import styled from 'styled-components';

export const OrderItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  width: 100%;
  transition: transform 0.2s cubic-bezier(0.4, 0.01, 0.63, 1);
  font-size: 16px;
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 56px;
`;

export const Image = styled.img`
  width: 56px;
  margin-bottom: 14px;
`;

export const Description = styled.div`
  width: calc(100% - 72px);
  display: block;
  margin-bottom: 2px;
`;

export const TopLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 4px;

  ::before {
    display: block;
    position: absolute;
    height: 1px;
    width: 100%;
    content: '';
    background: #373737;
    top: 10px;
  }
`;

export const TopLineTitle = styled.h5`
  font-size: 16px;
  line-height: 20px;
  color: #f4f4f4;
  font-weight: 600;
  letter-spacing: -0.01488em;
  padding-right: 8px;
  background-color: #1d1d1d;
  z-index: 1;
`;

export const TopLineOrder = styled.span`
  font-weight: 700;
  padding-left: 8px;
  color: #f4f4f4;
  z-index: 1;
  font-size: 16px;
  line-height: 20px;
  background-color: #1d1d1d;
`;

export const BottomLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  background: transparent;
  cursor: pointer;

  :not(:last-child) {
    margin-right: 10px;
  }
`;

export const Small = styled.small`
  font-size: 12px;
  line-height: 16px;
  color: #888;
`;
