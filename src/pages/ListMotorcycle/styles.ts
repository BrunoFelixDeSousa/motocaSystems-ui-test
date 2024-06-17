import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1440px;
  margin: 0 auto;

  padding: 2rem 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${(props) => props.theme['cinza-600']};
`

export const Title = styled.h1`
  font-size: 1.563rem;
  font-weight: 600;
  color: ${(props) => props.theme['cinza-600']};
`

export const SearchMotorcycle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;

  input {
    width: 385px;
    height: 3.5rem;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme['cinza-600']};
    border-radius: 5px;

    padding: 1rem 1rem 1rem 2.5rem;
    color: #fff;
  }
`
export const SearchIcon = styled.img`
  position: absolute;
  left: 0.75rem;
  width: 1rem;
  height: 1rem;
  pointer-events: none;
`

export const LinkNewRegister = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;

  padding: 1rem 2rem;

  background-color: ${(props) => props.theme['azul-500']};
  border: none;
  border-radius: 5px;

  font-size: 1rem;
  color: #fff;

  transition: filter 0.3s;

  img {
    width: 0.75rem;
    height: 0.75rem;
  }

  &:hover {
    filter: brightness(0.8);
  }
`
