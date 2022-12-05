import React from 'react'

const Tweet = ({
  username,
  userDisplayName,
  text,
  timestamp
}) => {
  const relativeDate = (timestamp) => {
    // Convert the given date string to a Date object
    const dateObj = new Date(timestamp)

    // Get the current date and time
    const now = new Date()

    // Calculate the difference between the given date and the current date
    const diff = now - dateObj

    // Convert the difference to hours
    const hours = Math.floor(diff / (60 * 60 * 1000))

    // If the difference is less than 24 hours, return the difference in hours
    if (hours < 24) {
      return `${hours}h`
    }

    // Otherwise, return the full date
    return dateObj.toDateString()
  }
  return (
    <div className="tweet" style={{ display: 'flex' }}>
      <img
        className="avatar"
        src={`https://pbs.twimg.com/profile_images/1267830833940815872/gN21yPbi_400x400.jpg`}
        alt={username}
        style={{ flex: '0 0 auto' }}
      />
      <div className="tweet-content" style={{ flex: '1 1 auto' }}>
        <div className="tweet-header">
          <div className="tweet-username">
            <span className="display-name">{userDisplayName}</span> @{username}{' '}
            · <span className="tweet-date">{relativeDate(timestamp)}</span>
          </div>
        </div>
        <div className="tweet-text">{text}</div>
      </div>
    </div>
  )
}

export default Tweet



