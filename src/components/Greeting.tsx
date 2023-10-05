import classes from './Greeting.module.css'

//!!!!!!!!!!!!!! main
// interface propstype {
//   name: string
//   isLoggedIn: boolean
// }

// const Greeting = ({ name, isLoggedIn }: propstype) => {
//   //useState
//   const [greetingMsg, setGreetingMsg] = useState<string>('welcome')
//   //useState to change welcome => asasa
//   const handleClick = () => {
//     setGreetingMsg('asasa')
//   }

//   return (
//     <>
//       <div className={classes.card}>
//         <h3>{greetingMsg}</h3>
//         <h3>{isLoggedIn ? `welcome ${name}` : `welcome Anonymous`}</h3>
//       </div>
//       <button onClick={handleClick}>Change Greeting message</button>
//     </>
//   )
// }
// export default Greeting
//!!!!!!!!!!!!!!

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

//!!!!!!!!!!!!!!

interface IGreetingProps {
  name: string
  isLoggedIn: boolean
}

const Greeting = ({ name, isLoggedIn }: IGreetingProps) => {
  return (
    <div className={classes.card}>
      <h3>Welcome!</h3>
      <p>{isLoggedIn ? name : 'Unknown'}</p>
    </div>
  )
}

export default Greeting
