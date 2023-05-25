import { Outlet, useNavigation } from "react-router-dom";
import * as S from "./styles";

const Main = () => {
  const navigation = useNavigation();

  return (
    <S.Main isLoading={navigation.state !== "idle"}>
      <Outlet />
    </S.Main>
  )
}

export default Main