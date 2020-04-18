import loadFirestore from './db'

const fetchData = async (userID) => {
  let data = []
  const firebase = await loadFirestore()
  const query = await firebase.firestore().collection('todo').doc(userID).collection('todos').orderBy('done').limit(12)

  query.onSnapshot((snapshot) => {
    if (snapshot.size) {
      snapshot.forEach((doc) => {
        // const document = { id: doc.id, ...doc.data() }
        data.push({ id: doc.id, ...doc.data() })
      })
    }
  })
  return data
}

export default fetchData
