import SideBar from "../../components/sidebar"
import TopBar from "../../components/topbar"
import Main from "../../components/main"
import * as S from "./styles";

const MainLayout = () => {
  return (
    <S.MainLayout>
      <SideBar />
      <TopBar />
      <Main />
    </S.MainLayout>

  )
}

export default MainLayout