export interface PostDTO {
  id: number
  userId: number
  title: string
  body: string
}

export interface CreatePostDTO {
  userId: number
  title: string
  body: string
}
// export default interface
// import { PostDTO } from '../types/dto'
