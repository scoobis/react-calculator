import React from 'react'
import { Button, Box } from '@material-ui/core'
import './calculator.css'

const Calculator = () => {
  return (
    <div className='calculator-container'>
      <Box>
        <Button variant='outlined'>1</Button>
        <Button variant='outlined'>2</Button>
        <Button variant='outlined'>3</Button>
      </Box>

      <Box>
        <Button variant='outlined'>1</Button>
        <Button variant='outlined'>2</Button>
        <Button variant='outlined'>3</Button>
      </Box>

      <Button variant='outlined'>3</Button>
    </div>
  )
}

export default Calculator
