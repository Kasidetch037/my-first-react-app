import './App.css'
import Greeting from './components/Greeting'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeting fname="tar" lname="kk" isLogin={true} />
      <Greeting fname="tam" lname="ip" isLogin={false} />
      <Greeting fname="tim" lname="ip" isLogin={false} />
    </div>
  )
}

export default App
