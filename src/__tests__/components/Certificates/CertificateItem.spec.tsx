import '@testing-library/jest-dom'
import * as React from 'react'
import CertificateIssuerStorage from '../../../scripts/certificates/CertificateIssuerStorage'
import CertificateItem from '../../../components/Certificates/CertificateItem'
import SupportedLocales from '../../../scripts/i18n/SupportedLocales'
import TechnologyStorage from '../../../scripts/technologies/TechnologyStorage'
import { CertificateIssuer } from '../../../scripts/certificates/types'
import { render } from '@testing-library/react'
import { testCertificateItem } from './TestUtils'
import { Technology } from '../../../scripts/technologies/types'

describe('CertificateItem', () => {
  test('should render CertificateItem correctly', () => {
    const technologyStorage = new TechnologyStorage()
    const certificateIssuerStorage = new CertificateIssuerStorage()

    const issueDate = new Date(2022, 1, 22)
    const technologyName = 'maven'
    const technology: Technology = technologyStorage.findByName(technologyName)
    const issuerName = 'udemy'
    const issuer: CertificateIssuer = certificateIssuerStorage.findByName(issuerName)
    const i18nTitleKey = 'certificate-i18nTitleKey'
    const url = 'certificate-url'

    const { container } = render(
      <CertificateItem
        id={null}
        issueDate={issueDate}
        issuer={issuer}
        technology={technology}
        i18nTitleKey={i18nTitleKey}
        url={url}
      />
    )
    testCertificateItem(
      container.querySelector('div.card'),
      SupportedLocales.default,
      issueDate,
      issuer.name,
      technologyName,
      i18nTitleKey,
      url
    )
  })
})
