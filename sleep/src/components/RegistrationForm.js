import React from 'react'

const ResgistrationForm=(props)=>{
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
                    Email:&nbsp;
                    <input
                    value={values.email}
                    onChange={onInputChange}
                    name='email'
                    type='email'
                    />
                </label>
                <label>
                    Password:&nbsp;
                    <input
                    value={values.password}
                    onChange={onInputChange}
                    name='password'
                    type='password'
                    />
                </label>
                <button>Submit</button>
            </div>
            </form>
    )
}
export default ResgistrationForm;