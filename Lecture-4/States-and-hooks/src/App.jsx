
import './App.css'
import BadCounter from './Components/BadCounter'
import Counter from './Components/Counter'
import CounterWithLimits from './Components/CounterWithLimits'
import CounterChangeDirection from './Components/CounterChangeDirection'
function App() {

  return (
    <>
    <BadCounter />
    <hr />
    <Counter />
    <hr />
    <CounterWithLimits />
    <hr />
    <CounterChangeDirection />
    </>
  )
}

export default App
