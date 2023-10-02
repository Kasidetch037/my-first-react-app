import './App.css'
import Greeting from './components/Greeting'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeting fname="tar" lname="kk" />
      <Greeting fname="tam" lname="ip" />
      <Greeting fname="tim" lname="ip" />
    </div>
  )
}

export default App
