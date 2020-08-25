import React from 'react';
import styled from 'styled-components'
const StyledRegistration = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
`
function Register({details}){
    if(!details){
        return <h3>Working on fetching new user&apos;s details...</h3>;
    }

    return(
        <StyledRegistration>
            <h2>Username: </h2>
            <p>password: </p>
        </StyledRegistration>
    );
}

export default Register;