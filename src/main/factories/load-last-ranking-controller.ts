import { FakeRankingRepository } from '../../infra/repositories'
import { LastRankingLoaderService } from '../../data/services'
import { LoadLastRankingController } from '../../presentation/controllers'

export function createLoadLastRankingController() {
  const repository = new FakeRankingRepository()
  const service = new LastRankingLoaderService(repository)

  return new LoadLastRankingController(service)
}
