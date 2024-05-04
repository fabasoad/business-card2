import * as React from 'react'
import type { LeetcodeStats } from '../scripts/services/LeetcodeService'
import type { StackExchangeData } from '../scripts/services/StackExchangeService'

export type StatsDefaultProps = {
  leetcode: LeetcodeStats
  stackExchange: StackExchangeData
}

export const defaultStatsDefaultProps: StatsDefaultProps = {
  leetcode: {
    totalSolved: 234,
    easySolved: 125,
    mediumSolved: 106,
    hardSolved: 3
  },
  stackExchange: {
    stackOverflow: {
      reputation: 0,
      answerCount: 0
    },
    superUser: {
      reputation: 0,
      answerCount: 0
    }
  }
}

const StatsMainContext: React.Context<StatsDefaultProps> =
  React.createContext<StatsDefaultProps>(defaultStatsDefaultProps)
export default StatsMainContext
