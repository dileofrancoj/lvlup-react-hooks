import { useThrottle } from './hooks/useThrottle'

function App() {
  const onClick = useThrottle(
    (e: React.MouseEvent<HTMLButtonElement | MouseEvent>) =>
      console.log('e', e),
    1000
  )
  return (
    <>
      <h2>LVL UP Hooks Library</h2>
      <button onClick={onClick}>Throttle button</button>
    </>
  )
}

export default App
