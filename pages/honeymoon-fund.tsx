import { NextPage } from 'next'
import Layout from '../components/Layout'

import CheckoutForm from '../components/CheckoutForm'

const DonatePage: NextPage = () => {
  return (
    <Layout title="C&#38;M - Gettin Hitched">
      <div className="page-container">
        <h1>The Honeymoon Fund</h1>
        <p>Nam aliquam et massa eget pellentesque. Ut volutpat sapien ac diam condimentum eleifend. Morbi ultricies tincidunt feugiat. Phasellus rutrum tristique nibh eu porttitor.</p>
        <CheckoutForm />
      </div>
    </Layout>
  )
}

export default DonatePage
