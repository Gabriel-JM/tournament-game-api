import { RankingScore } from '../../domain/entities'

export class RankingScoreViewModel {
  player: Player
  score: number
  matchDate: string
  heroes: Hero[]

  static map(entity: RankingScore) {
    return {
      ...entity,
      matchDate: entity.matchDate.toISOString()
    }
  }

  static mapCollection(entities: RankingScore[]) {
    return entities.map(RankingScoreViewModel.map)
  }
}

interface Player {
  name: string
  country: string
}

interface Hero {
  name: string
  level: number
}

