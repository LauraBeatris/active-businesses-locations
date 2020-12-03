import React from 'react'
import { render } from '@testing-library/react'

import BusinessesList from 'components/BusinessesList'
import { businessMockData } from 'mocks/businesses'

jest.mock('hooks/useBusinesses', () => () => {
  const { businessMockData } = require('mocks/businesses')

  return ({
    data: [businessMockData]
  })
})

describe('BusinessesList Component', () => {
  it('should render businesses', () => {
    const { getByText } = render(<BusinessesList />)

    expect(getByText(businessMockData.business_name, {
      exact: false
    })).toBeInTheDocument()
  })
})
