import React from 'react';


 const RegistrationForm=(props)=>{
    const{
        values,
        submit,
        inputChange,
    }=props

    const onSubmit =evt=>{
        evt.preventDefault()
        submit()
    }
    const onInputChange= evt=>{
        const {name, value} = evt.target
        inputChange(name, value)
    }

    return( 
        <form className= 'reg form container' onSubmit={onSubmit}>
            <div className='reg form inputs'>
                <h3>Create a new account</h3>
                <label>
                    Username:&nbsp;
                    <input
                    value={values.username}
                    onChange={onInputChange}
                    name='username'
                    type='text'
                    />
                </label>
                <label>
                    Password:&nbsp;
                    <input
                    value={values.password}
                    onChange={onInputChange}
                    name='password'
                    type='text'
                    />
                </label>
                <button>Submit</button>
            </div>
            </form>
    )
}

export default RegistrationForm;