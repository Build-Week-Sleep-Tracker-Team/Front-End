import React from 'react'

const SleepForm =(props)=>{
    const{
        values,
        submit,
        inputChange,
    }=props

    const onSubmit =evt =>{
        evt.preventDefault()
        submit()
    }

    const onInputChange = evt =>{
        const {name,value}= evt.target
        inputChange(name,value)
    }
    return(
        <form className= 'form container' onSubmit={onSubmit}>
            <div className='form inputs'>
                <h3>Sleep List</h3>
                <label>
                    Mood:&nbsp;
                    <input
                    value={values.mood}
                    onChange={onInputChange}
                    name='mood'
                    type='integer'
                    />
                </label>
                <label>
                    Sleep Start:&nbsp;
                    <input
                    value={values.sleepStart}
                    onChange={onInputChange}
                    name='start'
                    type='text'
                    />
                </label>
                <label>
                    Sleep Stop:&nbsp;
                    <input
                    value={values.sleepEnd}
                    onChange={onInputChange}
                    name='stop'
                    type='text'
                    />
                </label>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default SleepForm;