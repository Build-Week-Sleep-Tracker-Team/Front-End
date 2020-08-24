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
                    Name:&nbsp;
                    <input
                    value={values.name}
                    onChange={onInputChange}
                    name='name'
                    type='text'
                    />
                </label>
                <label>
                    Date:&nbsp;
                    <input
                    value={values.date}
                    onChange={onInputChange}
                    name='date'
                    type='date'
                    />
                </label>
                <label>
                    Sleep Start:&nbsp;
                    <input
                    value={values.start}
                    onChange={onInputChange}
                    name='start'
                    type='time'
                    />
                </label>
                <label>T.O.D
                    <select onChange={onInputChange} value={values.tod}>
                        <option select value='select'>
                            Select Day or Night
                        </option>
                        <option value= 'morning'>AM</option>
                        <option value ='night'>PM</option>
                    </select>
                </label>
                <label>
                    Sleep Stop:&nbsp;
                    <input
                    value={values.stop}
                    onChange={onInputChange}
                    name='stop'
                    type='time'
                    />
                </label>
                <label>T.O.D
                    <select onChange={onInputChange} value={values.tod}>
                        <option select value='select'>
                            Select Day or Night
                        </option>
                        <option value= 'morning'>AM</option>
                        <option value ='night'>PM</option>
                    </select>
                </label>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default SleepForm;