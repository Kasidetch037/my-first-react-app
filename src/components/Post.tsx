// import '../types/dto.ts'
import classes from './Greeting.module.css'
import { PostDTO } from '../types/dto'
import { useState } from 'react'
import { Link } from 'react-router-dom'

interface IPostProps {
  post: PostDTO
}

const Posting = ({ post }: IPostProps) => {
  const [showMoreMsg, setshowMoreMsg] = useState<boolean>(false)

  //ทำไม setshowMoreMsg({post.body}) ไม่ได้
  const showMoreClick = () => {
    setshowMoreMsg(!showMoreMsg)
  }

  return (
    <>
      <div className={classes.card}>
        {/* <p>id: {post.id}</p>
        <p>postedBy: {post.userId}</p>
        <p>title: {post.title}</p>
         */}
        <Link to={`/post/${post.id}`} style={{ textDecoration: 'none', color: 'black' }}>
          <p>id: {post.id}</p>
          <p>postedBy: {post.userId}</p>
          <p>title: {post.title}</p>
          <p>body: {post.body}</p>
        </Link>

        {showMoreMsg ? <p>body: {post.body}</p> : <p>...</p>}
        <button onClick={showMoreClick}>{showMoreMsg ? 'show less' : 'show more'}</button>
      </div>
    </>
  )
}

export default Posting
