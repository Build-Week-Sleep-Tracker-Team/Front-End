import React from 'react';
import styled from 'styled-components'
const StyledSleep = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  color: ${props => props.color || props.theme.primaryColor};
  margin: ${props => props.small};
  font-size: ${props => props.big ? '2em' : '1em'};

  @media (max-width: ${props => props.theme.tabletBreakpoint}) {
    width: 100%;
  }
    transition: all 0.5s ease-in-out;

    &:hover {
      transition: all 0.5s ease-in-out;
      transform: scale(1.3);
    }
  }
`
function Sleep({details}){
    if(!details){
        return <h3>Working on fetching your Sleep&apos;s details...</h3>;
    }

    return(
        <StyledSleep>
            <h2>Name: </h2>
            <h3>Date: </h3>
            <p>Sleep start: </p>
            <p>Sleep end: </p>
            <h4>Total Hours Slept:</h4>
        </StyledSleep>
    );
}

export default Sleep;