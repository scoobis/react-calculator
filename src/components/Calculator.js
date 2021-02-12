import React from 'react'
import { Button, Box } from '@material-ui/core'
import './calculator.css'

const Calculator = () => {
  return (
    <div className='wrapper'>
      <div className='calculator-container'>
        <div className='result-box'></div>
        <Box>
          <Button variant='outlined'>%</Button>
          <Button variant='outlined'>CE</Button>
          <Button variant='outlined'>C</Button>
          <Button variant='outlined'>&#x2190;</Button>
        </Box>
        <Box>
          <Button variant='outlined'>7</Button>
          <Button variant='outlined'>8</Button>
          <Button variant='outlined'>9</Button>
          <Button variant='outlined'>X</Button>
        </Box>

        <Box>
          <Button variant='outlined'>4</Button>
          <Button variant='outlined'>5</Button>
          <Button variant='outlined'>6</Button>
          <Button variant='outlined'>-</Button>
        </Box>

        <Box>
          <Button variant='outlined'>1</Button>
          <Button variant='outlined'>2</Button>
          <Button variant='outlined'>3</Button>
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
