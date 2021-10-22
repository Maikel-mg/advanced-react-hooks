// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const CounterContext = React.createContext()

function CounterProvider(props) {
  const [count, setCount] = React.useState(0);

  return <CounterContext.Provider value={{count, setCount}}>
    {props.children}
  </CounterContext.Provider>
}

const useCount = () => {
  const countContext = React.useContext(CounterContext);

  if(!countContext) {

    throw new Error('useCount should be used within a CounterProvider')
  }

  return countContext;
}

function CountDisplay() {
 
  const {count} = useCount();
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const {setCount} = useCount();
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CounterProvider>
        <CountDisplay />
        <Counter />
      </CounterProvider>
    </div>
  )
}

export default App
