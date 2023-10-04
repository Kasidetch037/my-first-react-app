// import { FormEvent, useEffect, useState } from 'react'
// import './App.css'
// import Greeting from './components/Greeting'
// import Navbar from './components/Navbar'
// import Posting from './components/Post'
// import { PostDTO } from './types/dto'
// import axios from 'axios'
// import usePosts from './hooks/usePosts'

// /*
// const initialPosts: PostDTO[] = [
//   {
//     id: 1,
//     userId: 1,
//     title: "Let's learn React!",
//     body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
//   },
//   {
//     id: 2,
//     userId: 2,
//     title: 'How to install Node.js',
//     body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
//   },
//   {
//     id: 3,
//     userId: 3,
//     title: 'Basic HTML',
//     body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
//   },
//   {
//     id: 4,
//     userId: 47,
//     title: 'Asdfgh',
//     body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
//   },
// ]
// */

// function App() {
//   const { posts, isLoading, isSubmitting, createPost } = usePosts()

//   const [newTitle, setNewTitle] = useState<string>('')
//   const [newBody, setNewBody] = useState<string>('')

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true)
//       try {
//         // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//         // const data = await res.json()

//         // if (!res.ok) {
//         //   throw new Error('error')
//         // }

//         const res = await axios.get<PostDTO[]>('https://jsonplaceholder.typicode.com/posts')

//         setPosts(res.data)
//       } catch (err) {
//         console.error(err)
//       } finally {
//         setIsLoading(false)
//       }
//     }

//     fetchData()
//   }, [])

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault()

//     /*
//     const currentPosts = [...posts]

//     currentPosts.push({
//       id: Math.floor(Math.random() * 1000), // * database should generate id for us
//       userId: Math.floor(Math.random() * 1000),
//       title: newTitle,
//       body: newBody,
//     })

//     setPosts(currentPosts)
//     */
//     if (!posts) return
//     //*
//     setIsSubmitting(true)
//     try {
//       //!
//       const res = await axios.post<PostDTO[]>('https://jsonplaceholder.typicode.com/posts', {
//         title: newTitle,
//         body: newBody,
//       })
//       console.log(res.data)
//     } catch (err) {
//       console.log('error')
//     } finally {
//       //*
//       setIsSubmitting(false)
//     }
//     setNewTitle('')
//     setNewBody('')
//   }

//   if (isLoading) return <h1>Loading...</h1>
//   return (
//     <div className="App">
//       <Navbar />
//       <p></p>
//       <form onSubmit={handleSubmit}>
//         <label>Title</label>
//         <input type="text" onChange={(e) => setNewTitle(e.target.value)} required />
//         <label>Body</label>
//         <input type="text" onChange={(e) => setNewBody(e.target.value)} required />

//         <button type="submit" disabled={isSubmitting}>
//           {isSubmitting ? 'Submitting' : 'Submit'}
//         </button>
//       </form>

//       <Greeting fname="tar" lname="kk" isLogin={true} />
//       <Greeting fname="tam" lname="ip" isLogin={false} />
//       <Greeting fname="tim" lname="ip" isLogin={false} />
//       <div className="feed-container">
//         {posts.map((post) => {
//           return <Posting key={post.id} post={post} />
//         })}
//       </div>
//     </div>
//   )
// }

// export default App

import { FormEvent, useState } from 'react'
import './App.css'
import Greeting from './components/Greeting'
import Navbar from './components/Navbar'
import Post from './components/Post'
import usePosts from './hooks/usePosts'

function App() {
  const { posts, isLoading, isSubmitting, createPost } = usePosts()
  const [newTitle, setNewTitle] = useState<string>('')
  const [newBody, setNewBody] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await createPost(newTitle, newBody)

      setNewTitle('')
      setNewBody('')
    } catch (err) {
      console.error(err)
    }
  }

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className="App">
      <Navbar />
      <Greeting name="Bun" isLoggedIn={true} />

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} required />
        <label>Body</label>
        <input type="text" value={newBody} onChange={(e) => setNewBody(e.target.value)} required />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      <div className="feed-container">
        {posts &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />
          })}
      </div>
    </div>
  )
}

export default App
