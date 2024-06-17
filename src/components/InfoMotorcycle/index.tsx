import {
  Container,
  IconButton,
  LoadingEllipsis,
  MotorcycleActions,
  MotorcycleCor,
  MotorcycleDetails,
  MotorcycleId,
  MotorcycleInfo,
  MotorcycleItem,
  MotorcycleName,
  StatusBadge,
} from './styles'

import { useEffect, useState } from 'react'
import { api } from '../../service/api'

import trashSvg from '../../assets/svg/trash.svg'
import viewSvg from '../../assets/svg/view.svg'
import { Link } from 'react-router-dom'
import { priceFormatter } from '../../utils/formatter'

interface Motorcycle {
  id: string;
  modelo: string;
  valor: string;
  cor: string;
  status: 'Em estoque' | 'Sem estoque' | 'Em trânsito';
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export function InfoMotorcycle() {
  const [motorcycleData, setMotorcycleData] = useState<Motorcycle[]>([])
  const [deleteById, setDeleteById] = useState<string | null>(null)

  useEffect(() => {
    fetchMotorcycleData()
  }, [])

  // Lista todos os dados das motos
  const fetchMotorcycleData = async () => {
    try {
      const response = await api.get('motorcycle/')
      setMotorcycleData(response.data)
    } catch (error) {
      console.error('Error fetching motorcycle:', error)
    }
  }

  const handleDelete = async (id: string) => {
    setDeleteById(id)
    try {
      await api.delete(`/motorcycle/${id}`)
      await delay(500)
      setMotorcycleData((prevData) =>
        prevData.filter((motorcycle) => motorcycle.id !== id)
      )
      console.log(`Motocicleta com ID ${id} deletada com sucesso.`)
    } catch (error) {
      console.error(`Erro ao deletar motocicleta com ID ${id}:`, error)
    }
  }

  return (
    <Container>
      {motorcycleData.map((motorcycle) => (
        <MotorcycleItem key={motorcycle.id}>
          <MotorcycleInfo>
            <MotorcycleId>#{motorcycle.id}</MotorcycleId>
            <MotorcycleDetails>
              <div>
                <MotorcycleName className="uppercase">
                  {motorcycle.modelo}
                </MotorcycleName>{' '}
                <StatusBadge status={motorcycle.status}>
                  {motorcycle.status}
                </StatusBadge>
              </div>
              <div>Valor: {priceFormatter.format(Number(motorcycle.valor))}</div>
              <div>
                Cor: <MotorcycleCor>{motorcycle.cor}</MotorcycleCor>
              </div>
            </MotorcycleDetails>
          </MotorcycleInfo>
          <MotorcycleActions>
            {deleteById === motorcycle.id ? (
              <LoadingEllipsis />
            ) : (
              <IconButton onClick={() => handleDelete(motorcycle.id)}>
                <img src={trashSvg} alt="Deletar" />
              </IconButton>
            )}
            <IconButton>
              <Link to={`/editar/${motorcycle.id}`}>
                <img src={viewSvg} alt="Visualizar" />
              </Link>
            </IconButton>
          </MotorcycleActions>
        </MotorcycleItem>
      ))}
    </Container>
  )
}
