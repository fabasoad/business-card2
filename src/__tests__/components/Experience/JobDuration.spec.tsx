import '@testing-library/jest-dom'
import * as React from 'react'
import configureMockStore from 'redux-mock-store'
import { render } from '@testing-library/react'

import JobDuration from '../../../components/Experience/JobDuration'
import SupportedLocales from '../../../scripts/SupportedLocales'
import { Provider } from 'react-redux'

const mockStore = configureMockStore()

const fixtures = [{
  code: 'gb',
  duration: '3 years 8 months'
}, {
  code: 'jp',
  duration: '3 年 8 ヶ月'
}, {
  code: 'ua',
  duration: '3 роки 8 місяців'
}]

for (const { code, duration } of fixtures) {
  test(`[${code}] should render JobDuration correctly`, () => {
    const store = mockStore({
      locale: SupportedLocales.getOrDefault(code)
    })
    const {container} = render(
      <Provider store={store}>
        <JobDuration
          fromMonth={7}
          fromYear={2018}
          toMonth={3}
          toYear={2022}
        />
      </Provider>
    )
    expect(container.querySelector('div.job-duration'))
      .toHaveTextContent(duration)
  })
}
