import React, { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'

type Props = {
  children: ReactNode
  title?: string
}

const Layout = ({
  children,
  title = 'Caitlin & Matt - Gettin\' Hitched!',
}: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="container">
      <header>
        <div className="header-content">
          <Link href="/">
            <a className="logo">
              <h1>
                <span className="light">
                  Caitlin &#38;
                  <br />
                  Matt
                </span>
                <br />
                Gettin' Hitched
              </h1>
            </a>
          </Link>
          
        </div>
      </header>
      {children}
    </div>
    <div className="banner">
      <span>
        Email questions{' '}
        <a
          href="mailto:matthew.k.guthrie@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </span>
    </div>
  </>
)

export default Layout
