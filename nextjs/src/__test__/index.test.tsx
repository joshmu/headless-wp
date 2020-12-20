// src/__test__/index.test.tsx

import { axe, toHaveNoViolations } from 'jest-axe'

import { render } from '@testing-library/react'

import IndexPage from '@/pages/index'

expect.extend(toHaveNoViolations)

describe('Index page', () => {
  test('should have no accessibility violations', async () => {
    const { container } = render(<IndexPage />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  xtest('matches snapshot', () => {
    const { asFragment } = render(<IndexPage />)
    expect(asFragment()).toMatchSnapshot()
  })
})