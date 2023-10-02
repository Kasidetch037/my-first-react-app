import './App.css'
import Button from './components/Button'
import Greeting from './components/Greeting'
import Navbar from './components/Navbar'
import Posting from './components/Post'
import { PostDTO } from './types/dto'

const posts: PostDTO[] = [
  {
    id: 1,
    userId: 1,
    title: "Let's learn React!",
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    id: 2,
    userId: 2,
    title: 'How to install Node.js',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    id: 3,
    userId: 3,
    title: 'Basic HTML',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    id: 4,
    userId: 47,
    title: 'Asdfgh',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
]

function App() {
  return (
    <div className="App">
      <Navbar />
      <Button />
      {/* <button>press</button> */}
      <Greeting fname="tar" lname="kk" isLogin={true} />
      <Greeting fname="tam" lname="ip" isLogin={false} />
      <Greeting fname="tim" lname="ip" isLogin={false} />
      <div className="feed-container">
        {posts.map((post) => {
          return <Posting key={post.id} post={post} />
        })}
      </div>
    </div>
  )
}

export default App
