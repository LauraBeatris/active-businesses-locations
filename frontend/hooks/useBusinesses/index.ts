import { useQuery } from 'react-query'

import axios from 'config/axios'

const fetchBusinesses = () => (
  axios.get('/businesses').then(response => response.data)
)

const useBusinesses = () => {
  const payload = useQuery('businesses', fetchBusinesses)

  return payload
}

export default useBusinesses
