const Button = () => {
  const click = () => {
    alert('Clicked')
  }

  return (
    <div onClick={() => click()}>
      <button>Click</button>
    </div>
  )
}
export default Button
