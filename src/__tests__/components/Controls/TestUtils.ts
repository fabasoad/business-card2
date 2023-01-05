import { Locale } from '../../../store/locale/types'

export function testDateLocale(
  container: HTMLElement, { code }: Locale, year: number, monthIndex?: number
): void {
  let expectedText
  switch (code) {
    case 'gb':
    case 'ua':
      expectedText = monthIndex == undefined
        ? year
        : `business-card-month-${monthIndex} ${year}`
      break
    case 'jp':
      expectedText = monthIndex == undefined
        ? 'business-card-year-singular'
        : `business-card-year-singularbusiness-card-month-${monthIndex}`
      break
    default:
      throw new Error(`${code} locale is not covered by tests`)
  }
  expect(container).toHaveTextContent(expectedText)
}

export function testSectionTitle(div: HTMLDivElement, title: string) {
  expect(div).toHaveClass('section-title')
  expect(div).toHaveClass('text-center')
  expect(div).toHaveClass('center')
  expect(div.querySelector('h2')).toHaveTextContent(title)
  expect(div.querySelector('hr')).not.toBeNull()
}