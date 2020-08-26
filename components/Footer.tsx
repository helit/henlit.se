import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Footer = (Props) => (
  <footer>
    <span>footer</span>
  </footer>
)

export default Footer

