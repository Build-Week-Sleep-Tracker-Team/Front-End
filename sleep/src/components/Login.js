import React from 'react';
import styled from 'styled-components'
const StyledLogin = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
`
function Login({details}){
    if(!details){
        return <h3>Working on fetching your login&apos;s details...</h3>;
    }

    return(
        <StyledLogin>
            <h2>Username: </h2>
            <p>password: </p>
        </StyledLogin>
    );
}

export default Login;