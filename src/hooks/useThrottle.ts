import * as React from 'react'
// @ts-expect-error: Declaration failed
import { throttle, type AnyFunction } from 'lvlup-javascript-utils'
import { useEvent } from './useEvent'

/**
 * Creates a stable throttled function that has access to the latest state and
 * can be used within event handlers and effect callbacks.
 * @example
 * function Component(props) {
 *   const throttleOnScrollEnd = useThrottle(props.onScrollEnd, 500);
 * }
 */
export function useThrottle<T extends AnyFunction>(fn: T, delay: number) {
  const event = useEvent(fn)

  return React.useMemo(() => throttle(event, delay), [event, delay])
}
