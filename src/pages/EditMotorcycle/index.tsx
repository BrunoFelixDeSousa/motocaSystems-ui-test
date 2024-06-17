import { useParams } from 'react-router-dom'
import { FormMotorcycle } from '../../components/FormMotorcycle'
import { Header } from '../../components/Header'
import { TitleContainer, Title } from './styles'

export function EditMotorcycle() {
  const { id } = useParams<{ id: string }>()
  
  return (
    <>
      <Header />
      <TitleContainer>
        <Title>Editar</Title>
      </TitleContainer>
      <FormMotorcycle id={id} />
    </>
  )
}