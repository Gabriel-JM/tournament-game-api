import express from 'express'
import { setupApolloServer } from './apollo-server'

import { setupRoutes } from './routes'

const app = express()

setupApolloServer(app)
setupRoutes(app)

export { app }
