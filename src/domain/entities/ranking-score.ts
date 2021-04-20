export interface RankingScore {
  player: Player
  score: number
  matchDate: Date
  heroes: Hero[]
}

interface Player {
  name: string
  country: string
}

interface Hero {
  name: string
  level: number
}
