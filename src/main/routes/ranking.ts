import { Router } from 'express'
import { createLoadLastRankingController } from '../factories'
import { adaptRouter } from '../adapters'

export default (router: Router) => {
  const controller = createLoadLastRankingController()

  router.get('/ranking/last', adaptRouter(controller))
}
