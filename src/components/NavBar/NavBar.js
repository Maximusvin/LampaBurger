import { Header, LogoWrap, Logo, Title } from './NavBar.style';
import logo from '../../assets/images/burger.svg';

const NavBar = () => {
  return (
    <Header>
      <LogoWrap>
        <Logo src={logo} alt="Logo LampaBurger" />
        <Title>LampaBurger</Title>
      </LogoWrap>
    </Header>
  );
};

export default NavBar;
