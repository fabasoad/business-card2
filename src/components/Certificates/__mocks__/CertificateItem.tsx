import * as React from 'react'
import { CertificateItemProps } from '../CertificateItem'

export default function CertificateItem({ certificate }: CertificateItemProps) {
  return (
    <div data-testid={certificate.id}></div>
  )
}
