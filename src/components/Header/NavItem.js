import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { ICOLOR } from 'constants'

const Root = styled.div`
  padding: 0 20px 7px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    cursor: pointer;
    text-decoration: none;
    color: ${ICOLOR.dark};
    font-size: 16px;
    text-transform: uppercase;
    font-family: "Inter-Medium";
    line-height: 19px;
  }

  &.active {
    border-bottom: 3px solid ${ICOLOR.orange};
  }
`

const NavItem = (props) => {
  const router = useRouter()
  const { id, label, link } = props

  return (
    <Root
      onClick={() => router.push(link)}
      key={id}
      className={window.location.pathname === link ? 'active' : ''}
    >
      <span>{label}</span>
    </Root>
  )
}

export default NavItem
