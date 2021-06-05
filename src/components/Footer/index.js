import React from 'react'
import styled from 'styled-components'
import FeatherIcon from 'feather-icons-react'
import { ICOLOR } from 'constants'
import Link from 'next/link'

const Root = styled.footer`
  background-color: ${ICOLOR.darkBackground};
  display: flex;
  justify-content: center;
  padding: 1.5rem 0;
  h6 {
    font-size: 1rem;
    margin-bottom: 0;
    text-align: center;
    color: ${ICOLOR.white};
    text-transform: uppercase;

    span.first {
      color: ${ICOLOR.textLight};
      text-transform: none;
    }
    .hearts {
      margin: 0 0.5rem;
      color: ${ICOLOR.orange};
    }

    span > a {
      color: ${ICOLOR.white};
    }
  }
`

function CustomFooter () {
  return (
    <Root>
      <h6>
        <span className='first'>
          Made with
          <span className='hearts'>&hearts;</span>
          by
        </span>
        <br />
        <span>
          <Link href='https://github.com/bilalafzal01'>
            <span>Bilal Afzal</span>
          </Link>
        </span>
      </h6>
    </Root>
  )
}

export default CustomFooter
