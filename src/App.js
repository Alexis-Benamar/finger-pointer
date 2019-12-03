import React from 'react'
import Emoji from './Emoji'

const App = () => {
  const possibleEmojis = ["🐢", "🥑", "🍺"]
  const emojis = []

  for(let i = 0; i < 10; i++) {
    emojis.push(<Emoji symbol={possibleEmojis[Math.floor(Math.random() * possibleEmojis.length)]} />)
  }

  return (
    <div>
      {emojis}
    </div>
  )
}

export default App