import styled from 'styled-components'

export const TitleContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;

  padding-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border-bottom: 1px solid ${(props) => props.theme['cinza-600']};
`

export const Title = styled.h1`
  font-size: 1.563rem;
  font-weight: 600;
  color: ${(props) => props.theme['cinza-600']};
`
