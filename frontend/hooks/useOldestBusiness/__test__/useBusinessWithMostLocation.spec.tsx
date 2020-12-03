import { ReactQueryCacheProvider, QueryCache } from 'react-query'
import { renderHook } from '@testing-library/react-hooks'
import AxiosMock from 'axios-mock-adapter'
import axios from 'config/axios'

import useOldestBusiness from 'hooks/useOldestBusiness'
import { businessMockData } from 'mocks/businesses'

const apiMock = new AxiosMock(axios)

describe('useOldestBusiness hook', () => {
  it('should fetch oldest business', async () => {
    const queryCache = new QueryCache()

    const wrapper = ({ children }) => (
      <ReactQueryCacheProvider queryCache={queryCache}>
        {children}
      </ReactQueryCacheProvider>
    )

    apiMock
      .onGet('businesses/most-location')
      .reply(200, businessMockData)

    const { result, waitFor } = renderHook(() => useOldestBusiness(), { wrapper })

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy()
    })

    expect(result.current.data).toBeTruthy()
  })
})
