import { Controller } from '../../presentation/contracts';

export async function adaptResolver(controller: Controller) {
  const httpResponse = await controller.handle()
  return httpResponse.data
}
