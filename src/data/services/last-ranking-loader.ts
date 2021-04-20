import { LastRankingLoader } from '../../domain/usecases/last-ranking-loader'
import { LoadLastRankingRepository } from '../contracts'
import { RankingUnavailableError } from '../../domain/errors'

export class LastRankingLoaderService implements LastRankingLoader {

  constructor(
    private readonly loadLastRankingRepository: LoadLastRankingRepository
  ) {}

  async load() {
    if(new Date().getHours() > 21) {
      throw new RankingUnavailableError()
    }

    return this.loadLastRankingRepository.loadLastRanking()
  }
}
