import Layout from '../component/Layout'
import Todo from '../component/Todo'

const Home = ({ userAgent }) => (
  <Layout>
    <Todo />
  </Layout>
)

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent
  return { userAgent }
}

export default Home
