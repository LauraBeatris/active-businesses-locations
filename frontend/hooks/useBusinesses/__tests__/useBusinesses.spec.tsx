import { ReactQueryCacheProvider, QueryCache } from 'react-query'
import { renderHook } from '@testing-library/react-hooks'
import AxiosMock from 'axios-mock-adapter'
import axios from 'config/axios'

import useBusinesses from 'hooks/useBusinesses'
import { businessMockData } from 'mocks/businesses'

const apiMock = new AxiosMock(axios)

describe('useBusinesses hook', () => {
  it('should fetch businesses', async () => {
    const queryCache = new QueryCache()

    const wrapper = ({ children }) => (
      <ReactQueryCacheProvider queryCache={queryCache}>
        {children}
      </ReactQueryCacheProvider>
    )

    apiMock
      .onGet('businesses')
      .reply(200, [businessMockData])

    const { result, waitFor } = renderHook(() => useBusinesses(), { wrapper })

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy()
    })

    expect(result.current.data).toBeTruthy()
  })
})
