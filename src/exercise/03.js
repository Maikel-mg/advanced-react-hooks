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

function CountDisplay() {
  const countContext = React.useContext(CounterContext);

  const count = countContext.count;
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const countContext = React.useContext(CounterContext);
  
  const setCount = countContext.setCount
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      {/*
        🐨 wrap these two components in the CountProvider so they can access
        the CountContext value
      */}
      <CounterProvider>
        <CountDisplay />
        <Counter />
      </CounterProvider>
    </div>
  )
}

export default App
