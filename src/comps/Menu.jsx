import { useNavigate } from 'react-router-dom'

function Menu() {
  const navigate = useNavigate()

  const handleStart = () => {
    navigate('/game')
  }

  return (
    <div>
      <h1>Menu</h1>
      <button onClick={handleStart}>Start Game</button>
    </div>
  )
}

export default Menu