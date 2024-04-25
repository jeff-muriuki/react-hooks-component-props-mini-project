import React from 'react'

 function Article({ title, preview, minutes, date='January 1, 1970' }) {
    const renderEmojis = (minutes) => {
        const emojis = minutes <= 30 ? '☕️' : '🍱';
        const count = Math.ceil(minutes / (minutes <= 30 ? 5 : 10));
        return emojis.repeat(count);
    }
  return (
    
        <article>
            <h3> {title} </h3>
            <small>  {date}  </small>
            <p>  {preview}  </p>
            <span>{renderEmojis(minutes)} {minutes} min read</span>
            </article>
    
  )
}
export default Article
