import classes from './Greeting.module.css'

interface propstype {
  fname: string
  lname: string
  isLogin: boolean
}

const Greeting = ({ fname, lname, isLogin }: propstype) => {
  // const { name, age } = props
  return (
    <div className={classes.card}>
      <h3>{isLogin ? `welcome ${fname} ${lname}` : `welcome Anonymous`}</h3>
    </div>
  )
}
export default Greeting
