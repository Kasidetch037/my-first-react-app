// import '../types/dto.ts'
import classes from './Greeting.module.css'
import { PostDTO } from '../types/dto'
import { useState } from 'react'

// body: 'quia...',
//button

interface IPostProps {
  post: PostDTO
}

const Posting = ({ post }: IPostProps) => {
  // const handleClick = (id: number) => {
  //   alert(`Post number ${id}`)
  // }

  // const [showMoreMsg, setshowMoreMsg] = useState<string>('quia et ...')

  const [showMoreMsg, setshowMoreMsg] = useState<boolean>(false)

  //ทำไม setshowMoreMsg({post.body}) ไม่ได้
  const showMoreClick = () => {
    setshowMoreMsg(!showMoreMsg)
  }

  return (
    <>
      {/* <div className={classes.card} onClick={() => handleClick(post.id)}> */}
      <div className={classes.card}>
        <p>id: {post.id}</p>
        <p>postedBy: {post.userId}</p>
        <p>title: {post.title}</p>
        {/* <p>body: {showMoreMsg}</p> */}
        {/* <button onClick={showMoreClick}>Show</button> */}
        {showMoreMsg ? <p>body: {post.body}</p> : <p>...</p>}
        <button onClick={showMoreClick}>{showMoreMsg ? 'show less' : 'show more'}</button>
      </div>
    </>
  )
}

export default Posting
