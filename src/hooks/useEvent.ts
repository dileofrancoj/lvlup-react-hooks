import * as React from 'react'
// @ts-expect-error expect failing
import type { AnyFunction } from 'lvlup-javascript-utils'

/**
 * Creates a stable callback function that has access to the latest state and
 * can be used within event handlers and effect callbacks. Throws when used in
 * the render phase.
 * @example
 * function Component(props) {
 *   const onClick = useEvent(props.onClick);
 *   React.useEffect(() => {}, [onClick]);
 * }
 */
export function useEvent<T extends AnyFunction>(callback?: T) {
  const ref = React.useRef<AnyFunction | undefined>(() => {
    throw new Error('Cannot call an event handler while rendering.')
  })

  React.useEffect(() => {
    ref.current = callback
  })

  return React.useCallback<AnyFunction>((...args: AnyFunction) => ref.current?.(...args), []) as T
}
