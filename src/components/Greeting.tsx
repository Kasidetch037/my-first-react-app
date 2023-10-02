import classes from './Greeting.module.css'

const Greeting = ({ fname, lname }) => {
  // const { name, age } = props
  return (
    <div className={classes.card}>
      <h3>
        name {fname} {lname}
      </h3>
    </div>
  )
}
export default Greeting
