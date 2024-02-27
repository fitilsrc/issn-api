export interface ResponseForItem<T> {
  error?: Error;
  result?: T;
}

/**
 * Create Response object with error
 * @param result
 * @param error
 * @returns
 */
export function prepareResponseForItem<T>(
  result?: T,
  error?: Error,
) {
  return {
    result: result ?? undefined,
    error
  }
}