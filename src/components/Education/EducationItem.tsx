import * as React from 'react'
import { useTranslation } from 'react-i18next'
import DateCircleBox from '../Controls/DateCircleBox'

interface EducationItemProps {
  from: number
  to: number
  title: string
}

export default function EducationItem({ from, to, title }: EducationItemProps) {
  const { t } = useTranslation()
  return (
    <>
      <DateCircleBox
        fromMonthIndex={8}
        fromYear={from}
        toMonthIndex={8}
        toYear={to}
      />
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h4>{t('business-card-education-university-title')}</h4>
          <h4 className="subheading">{title}</h4>
        </div>
        <div className="timeline-body">
          <p>{t('business-card-education-university-speciality')}</p>
        </div>
      </div>
    </>
  )
}
