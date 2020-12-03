import { useQuery } from 'react-query'

import axios from 'config/axios'

const fetchOldestBusiness = () => (
  axios.get('/businesses/oldest').then(response => response.data)
)

const useOldestBusiness = () => {
  const payload = useQuery('oldest-business', fetchOldestBusiness)

  return payload
}

export default useOldestBusiness
