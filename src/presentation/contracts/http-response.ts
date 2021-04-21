type ArrayOrObject = Record<string, unknown> | Record<number, unknown>

export interface HttpResponse<T = ArrayOrObject> {
  statusCode: number
  data: T | T[]
}

export function serverError(error: Error) {
  return <HttpResponse> {
    statusCode: 500,
    data: {
      message: error.message
    }
  }
}

export function ok<T = ArrayOrObject>(data: T) {
  return <HttpResponse<T>> {
    statusCode: 200,
    data
  }
}
