import { Link } from "react-router-dom";
import * as S from "./styles";

const NotFoundPageContainer = () => {
  return (
    <S.NotFoundPageContainer>
      <S.Title>404 - Page you're looking for is missing</S.Title>
      <Link to="/">Go home</Link>
    </S.NotFoundPageContainer>
  )
}

export default NotFoundPageContainer