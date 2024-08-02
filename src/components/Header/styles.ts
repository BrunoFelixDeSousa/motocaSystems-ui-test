import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ContainerHeader = styled.header`
  /* height: 6.25rem; */
  width: 100%;
  padding-top: 1.75rem;
  padding-right: 2.625rem;

  div {
    display: flex;
    justify-content: end;
    align-items: end;
    gap: 1.125rem;
  }
`

export const LinkHome = styled(Link)`
  display: flex;
  align-items: center;
`

export const HomeIcon = styled.img`
  width: 2.063rem;
  height: 1.75rem;
`

export const ProfileContainer = styled.div`
  position: relative;
  display: inline-block;
`
export const ProfileLink = styled(Link)`
  display: inline-block;
`

export const ProfileImage = styled.img`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
`
export const StatusIndicator = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0.75rem;
  height: 0.75rem;
  background-color: green;
  border: 2px solid ${(props) => props.theme.dark};
  border-radius: 50%;
`
