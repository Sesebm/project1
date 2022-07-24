import React from 'react'

const QuoteBox = ({randomQuotes, randomColors, getRandomAll}) => {

  console.log(randomColors)

  const objectStyle = {
    color: randomColors
  }

  const objectBgStyle = {
    backgroundColor: randomColors
  }

  return (
    <article className='card' style={objectStyle}>
      <div className='card__container'>
        <div className='card__quote'>
        <i class='bx bxs-quote-left'></i>
        <p>{randomQuotes.quote}</p>
        </div>
        <p className='card__author'>{randomQuotes.author}</p>
        <button onClick={getRandomAll} className='card__btn' style={objectBgStyle}>&#62;</button>
      </div>
    </article>
  )
}

export default QuoteBox