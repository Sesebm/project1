import { useState } from 'react'
import quotes from './json/quotes.json'
import './App.css'
import QuoteBox from './components/QuoteBox'
import colors from './utils/colors'

function App() {
  
  const getRandomElement = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
  }

  let quoteRandom = getRandomElement(quotes)
  let colorRandom = getRandomElement(colors)

  const [randomQuotes, setRandomQuotes] = useState(quoteRandom)
  const [randomColors, setRandomColors] = useState(colorRandom)

  const getRandomAll = () => {
    quoteRandom = getRandomElement(quotes)
    colorRandom = getRandomElement(colors)

    setRandomQuotes(quoteRandom)
    setRandomColors(colorRandom)
  }

  const objectBgStyle = {
    backgroundColor: randomColors
  }

  return (
    <div className="App" style={objectBgStyle}>
     <QuoteBox
        randomQuotes={randomQuotes} 
        randomColors={randomColors}
        getRandomAll={getRandomAll}
     />
    </div>
  )
}

export default App
