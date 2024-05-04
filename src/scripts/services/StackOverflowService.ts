import RemoteService from './RemoteService'
import fetch from 'cross-fetch'

export type StackOverflowResponse = {
  items: { answer_count: number, reputation: number, site_name: string }[]
}

type StackOverflowServiceData = {
  reputation: number,
  answerCount: number
}

export type StackOverflowData = {
  stackOverflow: StackOverflowServiceData,
  superUser: StackOverflowServiceData
}

export const stackOverflowDataDefault: StackOverflowData = {
  stackOverflow: {
    answerCount: 0,
    reputation: 0
  },
  superUser: {
    answerCount: 0,
    reputation: 0
  }
}

export class StackOverflowService implements RemoteService<StackOverflowData> {
  private cache: StackOverflowData | undefined
  private readonly defaultVal: StackOverflowData

  private static STACKOVERFLOW_USER_ID = 215523

  public constructor(defaultVal: StackOverflowData) {
    this.defaultVal = defaultVal
  }

  public async request(): Promise<StackOverflowData> {
    if (!this.cache) {
      this.cache = await fetch(`https://api.stackexchange.com/2.3/users/${StackOverflowService.STACKOVERFLOW_USER_ID}/associated`)
        .then((resp) => resp.json())
        .then((data: StackOverflowResponse) => {
          let flag: boolean = false
          let stackOverflow: StackOverflowServiceData
          let superUser: StackOverflowServiceData
          for (let i = 0; i < data.items.length; i++) {
            if (data.items[i].site_name === 'Stack Overflow') {
              flag = true
              stackOverflow = {
                answerCount: data.items[i].answer_count,
                reputation: data.items[i].reputation
              }
            } else if (data.items[i].site_name === 'Super User') {
              flag = true
              superUser = {
                answerCount: data.items[i].answer_count,
                reputation: data.items[i].reputation
              }
            }
          }
          if (!flag) {
            throw new Error('Response does not have required information')
          }
          return { stackOverflow, superUser }
        })
        .catch(() => this.defaultVal)
    }
    return Promise.resolve(this.cache)
  }
}
