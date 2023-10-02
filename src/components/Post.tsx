// import '../types/dto.ts'
import classes from './Greeting.module.css'
import { PostDTO } from '../types/dto'

// const Posting = ({ id, userId, title, body }: PostDTO) => {
//     const x = (...posts)
//   return (
//     <div className={classes.card}>
//       {/* {posts.map((post) => {
//         return <Posting key={posts.id} post={post}
//       })} */}
//       <p>{posts.id}</p>
//     </div>
//   )
// }

interface IPostProps {
  post: PostDTO
}

const Posting = ({ post }: IPostProps) => {
  const handleClick = (id: number) => {
    alert(`Post number ${id}`)
  }

  return (
    <div className={classes.card} onClick={() => handleClick(post.id)}>
      <p>id: {post.id}</p>
      <p>postedBy: {post.userId}</p>
      <p>title: {post.title}</p>
      <p>body: {post.body}</p>
    </div>
  )
}

export default Posting
