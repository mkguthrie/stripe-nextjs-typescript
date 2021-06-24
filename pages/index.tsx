import { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <ul className="card-list">
        <li>
          <Link href="/donate-with-checkout">
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
