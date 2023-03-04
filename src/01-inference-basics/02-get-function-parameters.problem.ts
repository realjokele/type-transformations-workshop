import { Equal, Expect } from '../helpers/type-utils'

const makeQuery = (
  url: string,
  opts?: {
    method?: string
    headers?: {
      [key: string]: string
    }
    body?: string
  }
) => {}

type MakeQueryParameters = Parameters<typeof makeQuery>
type MakeQuerySecondParameter = Parameters<typeof makeQuery>[1]

type tests = [
  Expect<
    Equal<
      MakeQueryParameters,
      [
        url: string,
        opts?: {
          method?: string
          headers?: {
            [key: string]: string
          }
          body?: string
        }
      ]
    >
  >
]
