import '@testing-library/jest-dom'
import * as React from 'react'
import App from '../../components/App'
import SupportedLocales from '../../scripts/i18n/SupportedLocales'
import { Locale } from '../../scripts/i18n/types'
import { render } from '@testing-library/react'
import { testAboutMain } from './About/TestUtils'
import {
  testBackToTopButton,
  testBadges,
  testHeader,
  testResume,
  testSkills
} from './TestUtils'
import { testCertificatesMain } from './Certificates/TestUtils'
import { testEducationMain } from './Education/TestUtils'
import { testExperienceMain } from './Experience/TestUtils'
import { testFooterMain } from './Footer/TestUtils'
import { testLanguageMain } from './Languages/TestUtils'
import { testMenuMain } from './Menu/TestUtils'
import { testPortfolioMain } from './Portfolio/TestUtils'
import { testStatsMain } from './Stats/TestUtils'
import { getLeetcodeStatsMock, LeetcodeStatsMock } from './TestUtils'

const leetcodeStatsMock: LeetcodeStatsMock = getLeetcodeStatsMock()
leetcodeStatsMock.mock()

describe('App', () => {
  test('should render App correctly', () => {
    const locale: Locale = SupportedLocales.default
    const { container } = render(<App />)
    const div = container.querySelector('div.font-regular')
    expect(div).toHaveClass(`font-${locale.code === 'jp' ? '' : 'non-'}jp`)
    testBackToTopButton(div.querySelector('a.back-to-top'))
    testHeader(div.querySelector('header#header'))
    testMenuMain(div.querySelector('div#nav'))
    testAboutMain(div.querySelector('div#about'))
    testStatsMain(div.querySelector('div#stats'), {
      leetcode: { totalSolved: leetcodeStatsMock.expectedTotalSolved }
    })
    testResume(div.querySelector('div#resume'))
    testSkills(div.querySelector('div#skills'))
    testExperienceMain(div.querySelector('div#experience'), locale)
    testEducationMain(div.querySelector('div#education'), locale)
    testCertificatesMain(div.querySelector('div#certificates'), locale)
    testLanguageMain(div.querySelector('div#languages'))
    testPortfolioMain(div.querySelector('div#portfolio'))
    testBadges(div.querySelector('div#badges'))
    testFooterMain(div.querySelector('div.footer'))
  })
})
