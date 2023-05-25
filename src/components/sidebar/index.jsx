import Logo from "../logo";
import NavigationMenu from "../navigation-menu";
import * as S from "./styles";

const Sidebar = () => {
  return (
    <S.SideBar>
      <Logo />
      <NavigationMenu />
    </S.SideBar>
  )
}

export default Sidebar