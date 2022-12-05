import Tweet from './Tweet'
import './tweet.css'

import { createRoot } from 'react-dom/client'

const App = () => {
  return (
    <div>
      <Tweet
        username="jamesshapiro"
        userDisplayName="James Shapiro"
        text="Trying out an example tweet. This tweet will be 280 characters long to test out the new and improved longer-tweet format. Mostly I'm just trying to see how it looks. 280 characters is a lot of characters and I plan to use all of them. 280 280 280 280 280 280 280 280!"
        timestamp="2022-12-05T03:00:00Z"
        likes="100,000"
        retweets="10,000"
        replies="1,000"
      />
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)

export default App