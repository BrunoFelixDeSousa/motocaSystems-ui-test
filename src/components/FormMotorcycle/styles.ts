import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 1.625rem;
  font-weight: 600;
  text-align: center;
`

export const FormGroup = styled.div`
  margin: 0.5rem;
  width: 26.25rem;

  fieldset {
    padding: 1rem;
    color: ${(props) => props.theme['cinza-300']};

    border: 1px solid ${(props) => props.theme['cinza-300']};
    border-radius: 10px; /* Bordas arredondadas */

    legend {
      padding: 0 0.5rem; /* Espaçamento ao redor do texto */
      font-size: 1rem;
      color: ${(props) => props.theme['cinza-300']};

      &.collor-gray {
        color: ${(props) => props.theme['cinza-600']};
      }
    }
  }
`

export const Input = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme['cinza-300']};

  &.letter-collor {
    color: ${(props) => props.theme['cinza-600']};
  }

  &.uppercase {
    text-transform: uppercase;
  }

  &:focus {
    outline: none;
    border: none;
  }
`
export const Select = styled.select`
  width: 100%;
  font-size: 1rem;
  color: ${(props) => props.theme['cinza-300']};
  background-color: ${(props) => props.theme.dark};
  border: none;
  outline: none;

  &:focus {
    outline: none;
    border: none;
  }
`

export const Option = styled.option`
  background-color: ${(props) =>
    props.theme.light}; /* Funciona em alguns navegadores */
  color: ${(props) => props.theme['cinza-300']};
`
export const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background-color: ${(props) => props.theme['azul-500']};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.8);
  }
`
