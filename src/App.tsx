import { useState } from "react"
import { Tweet } from "./components/Tweet"

function App() {
  const [tweets, setTweets] = useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3',
  ])

  return (
    <div>
      {tweets.map(t => {
        return <Tweet text={t} />
      })}

      <button>Adicionar Tweet</button>
    </div>
  )
}

export default App
