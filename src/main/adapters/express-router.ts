import { Request, Response } from 'express'
import { Controller } from '../../presentation/contracts'

export function adaptRouter(controller: Controller) {
  return async (_req: Request, res: Response) => {
    const httpResponse = await controller.handle()

    res
      .status(httpResponse.statusCode)
      .json(httpResponse.data)
  }
}
