import { Controller, ok, serverError } from '../contracts'
import { LastRankingLoader } from '../../domain/usecases'
import { RankingScoreViewModel } from '../view-models/ranking-score'

export class LoadLastRankingController implements Controller {
  
  constructor(private readonly lastRankingLoader: LastRankingLoader) {}

  async handle() {
    try {
      const ranking = await this.lastRankingLoader.load()

      return ok(RankingScoreViewModel.mapCollection(ranking))
    } catch(error) {
      return serverError(error)
    }
  }

}
