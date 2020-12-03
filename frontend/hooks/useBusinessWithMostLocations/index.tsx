import { useQuery } from 'react-query'

import axios from 'config/axios'

const fetchBusinessWithMostLocations = () => (
  axios.get('/businesses/most-locations').then(response => response.data)
)

const useBusinessWithMostLocations = () => {
  const payload = useQuery('business-with-most-locations', fetchBusinessWithMostLocations)

  return payload
}

export default useBusinessWithMostLocations
