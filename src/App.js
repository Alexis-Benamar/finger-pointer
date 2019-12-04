import React from 'react'
import styled from 'styled-components'

import Grid from './components/Grid'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const App = () => {
  return (
    <Container>
      <Grid />
    </Container>
  )
}

export default App