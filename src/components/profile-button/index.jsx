import * as S from './styles'

const ProfileButton = () => {
  return (
    <S.ProfileButton>
      <S.Image
        src="https://avatars.githubusercontent.com/u/5985515213232?v=4"
        alt="Avatar"
      />
      <S.Content>
        <S.Text>
          Berkin AK
        </S.Text>
        <S.Subtitle>
          Software Developer
        </S.Subtitle>
      </S.Content>
    </S.ProfileButton>
  )
}

export default ProfileButton