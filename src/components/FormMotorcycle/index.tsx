/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  Container,
  FormGroup,
  Input,
  Option,
  Select,
  Title,
} from './styles'
import { api } from '../../service/api'

import plus from '../../assets/svg/plus.svg'
import update from '../../assets/svg/up.svg'

interface Motorcycle {
  id?: string | number;
  modelo: string;
  valor: string | number;
  cor: string;
  status: 'Em estoque' | 'Sem estoque' | 'Em trânsito';
}

interface FormMotorcycleProps {
  id?: string;
}

export function FormMotorcycle({ id }: FormMotorcycleProps) {
  const [formMotorcycleData, setFormMotorcycleData] = useState<Motorcycle>({
    modelo: '',
    valor: '',
    cor: '',
    status: 'Em estoque',
  })

  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      fetchMotorcycleData(id)
    }
  }, [id])

  const fetchMotorcycleData = async (id: string) => {
    try {
      const response = await api.get(`/motorcycle/${id}`)
      setFormMotorcycleData(response.data)
    } catch (error) {
      console.error('Erro ao buscar os dados da moto:', error)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormMotorcycleData({
      ...formMotorcycleData,
      [name]: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault() // Para não recarregar a página
    try {
      if (id) {
        // Atualiza os dados da motocicleta existente
        await api.put(`/motorcycle/${id}`, formMotorcycleData)
        // alert('Moto atualizada com sucesso!')
      } else {
        // Cria uma nova motocicleta
        await api.post('/motorcycle', formMotorcycleData)
        // alert('Moto registrada com sucesso!')
      }
      
      setFormMotorcycleData({
        id: '',
        modelo: '',
        valor: '',
        cor: '',
        status: 'Em estoque',
      }) // Reseta o estado

      navigate('/')
    } catch (error) {
      console.error('Erro ao registrar a moto:', error)
      alert('Erro ao registrar a moto.')
    }
  }

  return (
    <Container>
      <Title>
        {id
          ? 'Editar Moto 🏍️'
          : 'Preencha as informações abaixo para registrar uma Moto 🏍️'}
      </Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <fieldset>
            <legend className="collor-gray">Código</legend>
            <Input
              placeholder="#"
              value={id ? `#${id}` : ''}
              className="letter-collor"
              disabled
            ></Input>
          </fieldset>
        </FormGroup>
        <FormGroup>
          <fieldset>
            <legend>Modelo da Moto</legend>
            <Input
              name="modelo"
              value={formMotorcycleData.modelo}
              onChange={handleChange}
              required
              className="uppercase"
            ></Input>
          </fieldset>
        </FormGroup>
        <FormGroup>
          <fieldset>
            <legend>Cor</legend>
            <Input
              name="cor"
              value={formMotorcycleData.cor}
              onChange={handleChange}
              required
              className="uppercase"
            ></Input>
          </fieldset>
        </FormGroup>
        <FormGroup>
          <fieldset>
            <legend>Valor</legend>
            <Input
              name="valor"
              // value={id ? {priceFormatter.format(Number(formMotorcycleData.valor))} : {formMotorcycleData.valor}}
              value={formMotorcycleData.valor}
              onChange={handleChange}
              required
            ></Input>
          </fieldset>
        </FormGroup>
        <FormGroup>
          <fieldset>
            <legend>Status</legend>
            <Select
              name="status"
              value={formMotorcycleData.status}
              onChange={handleChange}
            >
              <Option value="Em estoque">Em estoque</Option>
              <Option value="Sem estoque">Sem estoque</Option>
              <Option value="Em trânsito">Em trânsito</Option>
            </Select>
          </fieldset>
        </FormGroup>
        <Button type="submit">
          {id ? <img src={update} /> : <img src={plus} />}
          {id ? 'ATUALIZAR' : 'REGISTRAR'}
        </Button>
      </form>
    </Container>
  )
}
