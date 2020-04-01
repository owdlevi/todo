import Layout from '../components/Layout'
import Todo from '../components/Todo'

import loadFirestore from '../lib/db'

const Home = () => {
  return (
    <Layout>
      <Todo />
    </Layout>
  )
}

export default Home
