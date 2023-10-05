import { useParams } from 'react-router-dom'
import usePost from '../hooks/usePost'

const PostDetail = () => {
  const { id } = useParams()
  const { posts, isLoading, error } = usePost(id || '1')

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <p>{error}</p>

  return (
    <>
      <h1>PostDetail id: {posts?.id}</h1>
      <p>title: {posts?.title}</p>
      <p>body: {posts?.body}</p>
    </>
  )
}

export default PostDetail
