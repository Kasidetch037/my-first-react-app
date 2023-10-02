import classes from './Button.module.css'

const Button = () => {
  const click = () => {
    alert('Clicked')
  }

  return (
    <div onClick={() => click()} className={classes.button}>
      <button>Click</button>
    </div>
  )
}
export default Button
