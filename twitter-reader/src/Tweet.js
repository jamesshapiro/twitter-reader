import React from 'react'

const Tweet = ({
  username,
  userDisplayName,
  text,
  timestamp,
  bradius = '2px',
  isVerified = true,
  pic = 'https://pbs.twimg.com/profile_images/1267830833940815872/gN21yPbi_400x400.jpg',
}) => {
  const verified = (
    <svg
      margin-top="2px"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="r-1cvl2hr r-4qtqp9 r-yyyyoo r-1yjpyg1 r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
      width="20"
      height="20"
      style={{ marginBottom: '-4px' }}
    >
      <g>
        <path
          d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"
          fill="rgb(29, 155, 240)"
        ></path>
      </g>
    </svg>
  )

  const relativeDate = (timestamp) => {
    const dateObj = new Date(timestamp)
    const now = new Date()
    const diff = now - dateObj
    const minutes = Math.floor(diff / (60 * 1000))
    const hours = Math.floor(diff / (60 * 60 * 1000))
    if (minutes < 60) {
      return `${minutes}m`
    }
    if (hours < 24) {
      return `${hours}h`
    }
    const options = {
      month: 'short',
      day: 'numeric',
      timeZone: 'America/New_York',
    }
    const formattedDate = now.toLocaleDateString('en-US', options)
    return formattedDate
  }
  return (
    <div className="tweet" style={{ display: 'flex', borderRadius: bradius }}>
      <img
        className="avatar"
        src={pic}
        alt={username}
        style={{ flex: '0 0 auto' }}
      />
      <div className="tweet-content" style={{ flex: '1 1 auto' }}>
        <div className="tweet-header">
          <div className="tweet-username">
            <span className="display-name">{userDisplayName}</span>{' '}
            <span>{isVerified && verified}</span> @{username} ·{' '}
            <span className="tweet-date">{relativeDate(timestamp)}</span>
          </div>
        </div>
        <div className="tweet-text">{text}</div>
      </div>
    </div>
  )
}

export default Tweet



