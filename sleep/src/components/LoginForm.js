import React from 'react'

const LoginForm = (props) =>{
    console.log(props)
    const{
        values,
        submit,
        inputChange,
    }= props
console.log(props)
    const onSubmit = evt=>{
        evt.preventDefault()
        submit()
    }
    const onInputChange = evt =>{
        const {name,value} = evt.target
        inputChange(name,value)
    }
    return(
        <form className= 'top form container' onSubmit={onSubmit}>
            <div className='top form inputs'>
                <h3>Login</h3>
        <label>Username:&nbsp;
        <input
        value={values.name}
        onChange={onInputChange}
        name='username'
        type='text'
        />
    </label>
    <label>Password:&nbsp;
        <input
        value={values.password}
        onChange={onInputChange}
        name='password'
        type='password'
        />
    </label>
    <button>Login</button>
            </div>
        </form>
    )
}
export default LoginForm;
