import { Header } from '../../components/Header'
import { Container, LinkNewRegister, SearchIcon, SearchMotorcycle, Title } from './styles'

import plusIcon from '../../assets/svg/plus.svg'
import searchIcon from '../../assets/svg/search.svg'
import { InfoMotorcycle } from '../../components/InfoMotorcycle'

export function ListMotorcycle() {
  return (
    <>
      <Header />
      <Container>
        <Title>Tabela de Motos</Title>
        <SearchMotorcycle>
          <SearchIcon src={searchIcon} />
          <input type="text" placeholder="Buscar por código, nome e cor" />
          <LinkNewRegister to="/registrar">
            <img src={plusIcon} />
            novo Registro
          </LinkNewRegister>
        </SearchMotorcycle>
      </Container>
      <InfoMotorcycle />
    </>
  )
}