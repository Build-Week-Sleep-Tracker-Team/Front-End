import React from 'react';

function Sleep({details}){
    if(!details){
        return <h3>Working on fetching your Sleep&apos;s details...</h3>;
    }

    return(
        <div className='sleep-container'>
            <h2>Name: </h2>
            <h3>Date: </h3>
            <p>Sleep start: </p>
            <p>Sleep end: </p>
            <h4>Total Hours Slept:</h4>
        </div>
    );
}

export default Sleep;