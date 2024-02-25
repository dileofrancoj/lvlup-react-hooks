import { describe, it, vi, expect, beforeEach, afterEach } from 'vitest'
import { renderHook } from '@testing-library/react-hooks'
import { useThrottle } from '../useThrottle'

describe('useThrottle', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })
  it('should throttle function execution', () => {
    // Mock a function to be throttled
    const mockFn = vi.fn()

    // Render the hook with the mocked function and a delay of 500ms
    const { result } = renderHook(() => useThrottle(mockFn, 500))

    // Trigger the throttled function multiple times in quick succession
    result.current()
    result.current()
    result.current()

    // Check that the function is only called once within the throttling period
    expect(mockFn).toHaveBeenCalledTimes(1)

    vi.advanceTimersByTime(1000)

    result.current()

    expect(mockFn).toHaveBeenCalledTimes(2)
  })
})
