import { Color } from './ColorStyle.style';

const ColorStyle = ({ color, children }) => (
  <Color color={color}>{children}</Color>
);

export default ColorStyle;
