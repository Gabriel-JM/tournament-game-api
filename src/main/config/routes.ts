import { Router, Express } from 'express'
import { readdirSync } from 'fs'

export function setupRoutes(app: Express) {
  const router = Router()
  app.use('/api', router)

  readdirSync(`${__dirname}/../routes`).forEach(async fileName => {
    const module = await import(`../routes/${fileName}`)
    module.default(router)
  })

}
