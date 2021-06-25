import { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage: NextPage = () => {
  return (
    <Layout title="C&#38;M - Gettin Hitched">
      <ul className="card-list">
        <li>
          <Link href="/honeymoon-fund">
            <a className="card checkout-style-background">
              <h2 className="bottom">Honeymoon Fund</h2>
              <img src="/thailand.gif" />
            </a>
          </Link>
        </li>
      </ul>
    </Layout>
  )
}

export default IndexPage
