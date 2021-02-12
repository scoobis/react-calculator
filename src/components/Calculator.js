import React, { useState } from 'react'
import { Button, Box } from '@material-ui/core'
import './calculator.css'

const Calculator = () => {
  const [number, setNumber] = useState(0)

  const addNumber = (num) => {
    setNumber(number + num + '')
  }

  return (
    <div className='wrapper'>
      <div className='calculator-container'>
        <div className='result-box'>
          <span>{number}</span>
        </div>
        <Box>
          <Button variant='outlined'>%</Button>
          <Button variant='outlined'>CE</Button>
          <Button variant='outlined'>C</Button>
          <Button variant='outlined'>&#x2190;</Button>
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
          <Button variant='outlined'>-</Button>
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
          <Button variant='outlined'>+</Button>
        </Box>
        <Box>
          <Button variant='outlined'>lol</Button>
          <Button variant='outlined'>0</Button>
          <Button variant='outlined'>,</Button>
          <Button variant='outlined'>=</Button>
        </Box>
      </div>
    </div>
  )
}

export default Calculator
