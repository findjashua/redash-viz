import queries from '../mocks/queries'
import query from '../mocks/query'
import query_result from '../mocks/query_result'

const entityDict = { queries, query, query_result }

export default {
  get: entity => entityDict[entity]
}
