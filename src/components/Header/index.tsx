import {
  LinkHome,
  ContainerHeader,
  HomeIcon,
  ProfileContainer,
  ProfileImage,
  StatusIndicator,
  ProfileLink,
} from './styles'
import homeSvg from '../../assets/svg/home.svg'

import avatar from '../../assets/avatar.png'

export function Header() {
  return (
    <ContainerHeader>
      <div>
        <LinkHome to='/'>
          <HomeIcon src={homeSvg} alt="Ícone de home" />
        </LinkHome>
        <ProfileLink to='/'>
          <ProfileContainer>
            <ProfileImage src={avatar} alt="Imagem de perfil" />
            <StatusIndicator />
          </ProfileContainer>
        </ProfileLink>
      </div>
    </ContainerHeader>
  )
}

