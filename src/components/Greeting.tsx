import classes from './Greeting.module.css'

interface propstype {
  fname: string
  lname: string
  isLogin: boolean
}

const Greeting = ({ fname, lname, isLogin }: propstype) => {
  return (
    <div className={classes.card}>
      <h3>{isLogin ? `welcome ${fname} ${lname}` : `welcome Anonymous`}</h3>
    </div>
  )
}
export default Greeting

// interface PostDTO {
//   id: number
//   userId: number
//   title: string
//   body: string
// }

// const Greeting = ({ id, userId, title, body }: PostDTO) => {
//   return (
//     <div className={classes.card}>
//       <h3>{isLogin ? `welcome ${fname} ${lname}` : `welcome Anonymous`}</h3>
//     </div>
//   )
// }
