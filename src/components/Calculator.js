import React, { useState } from 'react'
import { Button, Box } from '@material-ui/core'
import './calculator.css'

const Calculator = () => {
  const [number, setNumber] = useState(0)
  const [numberSec, setNumberSec] = useState(0)
  const [currentSybol, setCurtrentSymbol] = useState('')

  const addNumber = (num) => {
    number === 0 ? setNumber(num) : setNumber(number + num.toString())
  }

  const performCalculation = (symbol) => {
    symbol === '=' ? setCurtrentSymbol(currentSybol) : setCurtrentSymbol(symbol)
    if (numberSec === 0) {
      setNumberSec(number)
      setNumber(0)
    } else {
      switch (currentSybol) {
        case '+':
          setNumber(parseInt(numberSec) + parseInt(number))
          setNumberSec(0)
          break
        case '-':
          setNumber(parseInt(numberSec) - parseInt(number))
          setNumberSec(0)
          break
      }
      setCurtrentSymbol('')
    }
  }

  const equal = () => {}

  const clearNumbers = () => {
    setNumber(0)
    setNumberSec(0)
  }

  return (
    <div className='wrapper'>
      <div className='calculator-container'>
        <div className='result-box'>
          <br />
          <span>
            {currentSybol} {numberSec === 0 ? '' : numberSec}
          </span>
          <br />
          <span>{number}</span>
        </div>
        <Box>
          <Button variant='outlined'>%</Button>
          <Button variant='outlined'>CE</Button>
          <Button variant='outlined' onClick={() => clearNumbers()}>
            C
          </Button>
          <Button variant='outlined' onClick={() => (number.length >= 2 ? setNumber(number.substring(0, number.length - 1)) : setNumber(0))}>
            &#x2190;
          </Button>
        </Box>
        <Box>
          <Button variant='outlined' onClick={() => addNumber(7)}>
            7
          </Button>
          <Button variant='outlined' onClick={() => addNumber(8)}>
            8
          </Button>
          <Button variant='outlined' onClick={() => addNumber(9)}>
            9
          </Button>
          <Button variant='outlined'>X</Button>
        </Box>

        <Box>
          <Button variant='outlined' onClick={() => addNumber(4)}>
            4
          </Button>
          <Button variant='outlined' onClick={() => addNumber(5)}>
            5
          </Button>
          <Button variant='outlined' onClick={() => addNumber(6)}>
            6
          </Button>
          <Button variant='outlined' onClick={() => performCalculation('-')}>
            -
          </Button>
        </Box>

        <Box>
          <Button variant='outlined' onClick={() => addNumber(1)}>
            1
          </Button>
          <Button variant='outlined' onClick={() => addNumber(2)}>
            2
          </Button>
          <Button variant='outlined' onClick={() => addNumber(3)}>
            3
          </Button>
          <Button variant='outlined' onClick={() => performCalculation('+')}>
            +
          </Button>
        </Box>
        <Box>
          <Button variant='outlined'>lol</Button>
          <Button variant='outlined'>0</Button>
          <Button variant='outlined'>,</Button>
          <Button variant='outlined' onClick={() => performCalculation('=')}>
            =
          </Button>
        </Box>
      </div>
    </div>
  )
}

export default Calculator
