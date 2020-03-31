import Layout from '../components/Layout'
import Todo from '../components/Todo'

import loadFirestore from '../lib/db'

const Home = ({ data }) => {
  return (
    <Layout>
      <Todo />
    </Layout>
  )
}

Home.getInitialProps = async ({ req }) => {
  const firebase = await loadFirestore()
  let data = []

  const querySnapshot = await firebase
    .firestore()
    .collection('data')
    .limit(12)
    .get()

  querySnapshot.forEach(doc => {
    data.push(doc.data())
  })

  return {
    data
  }
}

export default Home
