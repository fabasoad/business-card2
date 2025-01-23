import '@testing-library/jest-dom'
import * as React from 'react'
import EducationItem from '../../../components/Education/EducationItem'
import { render } from '@testing-library/react'
import { testEducationItem } from './TestUtils'

jest.mock('../../../components/Controls/DateCircleBox')

describe('EducationItem', () => {
  test('should render EducationItem correctly', () => {
    const { container} = render(
      <EducationItem
        from={2019}
        to={2020}
        title="test-title"
      />
    )
    testEducationItem(container, 'test-title')
  })
})
