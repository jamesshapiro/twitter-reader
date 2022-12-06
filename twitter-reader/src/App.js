import Tweet from './Tweet'
import './tweet.css'
import { LoremIpsum } from 'lorem-ipsum'

import { createRoot } from 'react-dom/client'

const App = () => {
    const lipsum = () => {
      const lorem = new LoremIpsum({
        sentencesPerParagraph: {
          max: 6,
          min: 3,
        },
        wordsPerSentence: {
          max: 12,
          min: 8,
        },
      })
      const result = lorem.generateParagraphs(1)
      return result
    }
  const quotedTweet = (
    <Tweet
      username="elonmusk"
      userDisplayName="Elon Musk"
      text="The intelligence of this hive-mind will improve significantly as signal/noise, effective cross-linking of tweets & speed of tweets all improve"
      timestamp="2022-12-04T02:00:00"
      bradius="15px"
      pic="https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg"
    />
  )
  return (
    <>
      <div>
        <Tweet
          username="jamesshapiro"
          userDisplayName="James Shapiro"
          text="Trying out an example tweet. This tweet will be 280 characters long to test out the new and improved longer-tweet format. Mostly I'm just trying to see how it looks. 280 characters is a lot of characters and I plan to use all of them. 280 280 280 280 280 280 280 280!"
          timestamp="2022-12-05T16:00:00"
          likes="100,000"
          retweets="10,000"
          replies="1,000"
        />
      </div>

      <div>
        <Tweet
          username="jamesshapiro"
          userDisplayName="James Shapiro"
          text={
            <>
              Basic Quote Tweet example:
              <br />
              <br /> {quotedTweet}
            </>
          }
          timestamp="2022-12-05T01:00:00"
          likes="100,000"
          retweets="10,000"
          replies="1,000"
        />
      </div>
      <div>
        <Tweet
          username="jamesshapiro"
          userDisplayName="James Shapiro"
          text={lipsum()}
          timestamp="2022-12-05T00:00:00"
          likes="100,000"
          retweets="10,000"
          replies="1,000"
        />
      </div>
      <div>
        <Tweet
          username="jamesshapiro"
          userDisplayName="James Shapiro"
          text={lipsum()}
          timestamp="2022-12-04T23:00:00"
          likes="100,000"
          retweets="10,000"
          replies="1,000"
        />
      </div>
      <div>
        <Tweet
          username="jamesshapiro"
          userDisplayName="James Shapiro"
          text={lipsum()}
          timestamp="2022-12-04T22:00:00"
          likes="100,000"
          retweets="10,000"
          replies="1,000"
        />
      </div>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)

export default App