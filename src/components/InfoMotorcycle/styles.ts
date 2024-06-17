import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1440px;
  margin: 1rem auto;
  padding: 1rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const MotorcycleItem = styled.div`
  width: 100%;
  height: 8.625rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3.5rem;

  background-color: ${(props) => props.theme['roxo-700']};
  border-radius: 5px;
`
export const MotorcycleId = styled.span`
  margin: 1.125rem;
  color: ${(props) => props.theme['roxo-400']};
  font-weight: 500;
`

export const MotorcycleInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  gap: 1rem;
`

export const MotorcycleDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 3.5rem;
  gap: 0.625rem;

  div {
    font-size: 1rem;
    font-weight: 500;
  }
`

export const MotorcycleCor = styled.span`
  text-transform: uppercase;
`
export const MotorcycleName = styled.span`
  font-size: 1.125rem;
  font-weight: 600;

  &.uppercase {
    text-transform: uppercase;
  }
`

export const StatusBadge = styled.span<{ status: string }>`
  background-color: ${({ status, theme }) =>
    status === 'Em estoque'
      ? theme['verde-700']
      : status === 'Sem estoque'
      ? theme['vermelho-700']
      : theme['amarelo-700']};
  color: ${({ status, theme }) =>
    status === 'Em estoque'
      ? theme['verde-400']
      : status === 'Sem estoque'
   
      ? theme['vermelho-400']
      : theme['amarelo-400']};
  padding: 0.25rem 0.5rem;
  border-radius: 25px;
  margin-left: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
`
export const MotorcycleActions = styled.div`
  display: flex;
  gap: 1.5rem;
`

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`
export const LoadingEllipsis = styled.div`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border: 0.2rem solid transparent;
  border-radius: 50%;
  border-left-color: ${(props) => props.theme['vermelho-400']};
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
