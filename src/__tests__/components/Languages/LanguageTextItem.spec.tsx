import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import LanguageTextItem from '../../../components/Languages/LanguageTextItem'
import { testLanguageTextItem } from './TestUtils'

for (const code of ['gb', 'jp', 'ua']) {
  test(`[${code}] should render LanguageTextItem correctly`, () => {
    const text = 'test-content'
    const { container } = render(
      <LanguageTextItem code={code} text={text} />
    )
    testLanguageTextItem(container.querySelector('div'), code, text)
  })
}
