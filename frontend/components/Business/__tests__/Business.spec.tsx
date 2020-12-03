import React from 'react'
import { render } from '@testing-library/react'
import Business from 'components/Business'
import { businessMockProps } from 'mocks/businesses'

describe('Business Component', () => {
  it('should render business values', () => {
    const { getByText } = render(<Business {...businessMockProps} />)

    Object.values(businessMockProps).forEach((value) => (
      expect(getByText(value, { exact: false })).toBeInTheDocument()
    ))
  })
})
