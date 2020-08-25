import React from 'react';
import styled from 'styled-components'
const StyledSleep = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
`
function Sleep({details}){
    if(!details){
        return <h3>Working on fetching your Sleep&apos;s details...</h3>;
    }

    return(
        <StyledSleep>
            <h2>Mood: </h2>
            <p>Sleep start: </p>
            <p>Sleep end: </p>
        </StyledSleep>
    );
}

export default Sleep;