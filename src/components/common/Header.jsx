/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import {owner, repo} from '../../constant/repo'


export default function Header() {
  return (
    <h1 css={header}>{owner} / {repo}</h1>
  )
}

const header = css`
  font-size: xx-large;
  font-weight: bolder;
  padding:30px;
`