import { adaptResolver } from '../../adapters/apollo-server-resolver'
import { createLoadLastRankingController } from '../../factories'

export default {
  Query: {
    async lastRanking() {
      const controller = createLoadLastRankingController()
      return adaptResolver(controller)
    }
  }
}
