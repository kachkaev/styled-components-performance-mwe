import {map} from 'lodash'
import React, {Component} from 'react'
import styled from 'styled-components'

import continents from './images/continents.svg'
import worldIcon from './images/world-icon.svg'

import TogglableButton from './TogglableButton'
import SpinningSquare from './SpinningSquare'

const Wrapper = styled.div``
const RowOfButtons = styled.div`text-align: center;`
const SpinningSquareContainer = styled.div`
  margin-top: 40px;
  text-align: center;
`

class App extends Component {
  render() {
    return (
      <Wrapper>
        {map(['#7fc97f', '#beaed4', '#fdc086'], color => (
          <RowOfButtons key={color}>
            {map([continents, worldIcon], backgroundImage =>
              map(['x', 'y'], irrelevantProp => (
                <TogglableButton
                  key={irrelevantProp}
                  color={color}
                  backgroundImage={backgroundImage}
                  irrelevantProp={irrelevantProp}
                />
              ))
            )}
          </RowOfButtons>
        ))}
        <RowOfButtons>
          <TogglableButton color="#fb8072" />
          <TogglableButton color="#fb8072" />
          <TogglableButton color="black" />
          <TogglableButton color="black" />
        </RowOfButtons>
        <SpinningSquareContainer>
          <SpinningSquare />
        </SpinningSquareContainer>
      </Wrapper>
    )
  }
}

export default App
