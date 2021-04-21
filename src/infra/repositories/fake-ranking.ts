import { LoadLastRankingRepository } from '../../data/contracts/load-last-ranking-repository'
import { RankingScoreModel } from '../../data/models'
import { ranking } from '../data-sources'

export class FakeRankingRepository implements LoadLastRankingRepository {

  async loadLastRanking() {
    return ranking.map(item => (<RankingScoreModel> {
      player: item.user,
      score: item.score,
      matchDate: new Date(item.date),
      heroes: item.heroes
    }))
  }
}
