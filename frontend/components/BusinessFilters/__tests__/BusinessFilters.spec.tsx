import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import BusinessFilters from 'components/BusinessFilters'
import { BusinessFiltersValue } from 'components/BusinessFilters/types'

let handleBusinessFilterValueChange

describe('Business Filters Component', () => {
  beforeEach(() => {
    handleBusinessFilterValueChange = jest.fn()
  })

  it('should select filter value received via property', () => {
    const { getByText } = render(
      <BusinessFilters
        businessFilterValue={BusinessFiltersValue.All}
        handleBusinessFilterValueChange={handleBusinessFilterValueChange}
      />
    )

    expect(getByText('All')).toHaveAttribute('data-checked')
  })

  it('should select filter option', () => {
    const { getByTestId } = render(
      <BusinessFilters
        businessFilterValue={BusinessFiltersValue.All}
        handleBusinessFilterValueChange={handleBusinessFilterValueChange}
      />
    )

    fireEvent.click(getByTestId('most-locations'))

    expect(handleBusinessFilterValueChange).toHaveBeenCalledWith(BusinessFiltersValue.MostLocations)
  })
})
