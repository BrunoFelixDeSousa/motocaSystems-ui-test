import { FormMotorcycle } from '../../components/FormMotorcycle'
import { Header } from '../../components/Header'
import { TitleContainer, Title } from './styles'

export function RegisterMotorcycle() {
  return (
    <>
      <Header />
      <TitleContainer>
        <Title>Registro de Motos</Title>
      </TitleContainer>
      <FormMotorcycle />
    </>
  )
}
