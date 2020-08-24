import React, {useState, useEffect} from 'react';
import axios from 'axios';
import *as yup from 'yup';
import './App.css'
import Sleep from './components/Sleep'
import SleepForm from './components/SleepForm'
import formSchema from './validation/formSchema'

const initialFormValues={
    name:'',
    date:'',
    start:'',
    stop:'',
    slept: '',
}

const initialFormErrors ={
    name:'',
    date:'',
    start:'',
    stop:'',
    slept: '',
}

const initialSleep=[]
const initialDisabled = true

const App = () => {
    const [formValues, setFormValues]=useState(initialFormValues)
    const[formErrors, setFormErrors]=useState(initialFormErrors)
    const[disabled, setDisabled]=useState(initialDisabled)
    const[sleep,setSleep]=useState(initialSleep)
}
useEffect(()=>{
    const getSleep = ()=>{
        axios.get('https://my-sleep-tracker.herokuapp.com/api/users')
        .then(res=>{
            setSleep(res.data);
        })
        .catch(err=>{
            console.log(err)
        });
    }
    getSleep();
},[]);

const postNewSleep = newSleep=>{
    axios.post('https://my-sleep-tracker.herokuapp.com/api/users',newSleep)
    .then(res=>{
        setSleep([...sleep, res.data])
    })
    .catch(err=>{
        console.log(err)
    })
    .finally(()=>{
        setFormValues(initialFormValues)
    })
}
//input changes//
const inputChange=(name,value)=>{
    yup
    .reach(formSchema,name)
    .validate(value)
    .then(valid=>{
        setFormErrors({
            ...formErrors,
            [name]: '',
        })
    })
    .catch(err=>{
        setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
        })
    })
    setFormValues({
        ...formValues,
        [name]:value,
    })
//Potential Checkbox//
    const submit = () =>{
        const newSleep = {
            Name: formValues.name,
            Date: formValues.date,
            Start: formValues.start,
            Stop: formValues.stop,
            Slept: formValues.slept,
        }
        postNewSleep(newSleep)
    }
    useEffect(()=>{
        console.log(sleep)
    },[sleep])

    useEffect(()=>{
        formSchema.isValid(formValues)
        .then(valid=>{
            setDisabled(!valid);
        })
    },[formValues])

    return(
        <div className='App'>
            <div className='container'>
                <header>
                    <h1>Sleep</h1>
                </header>
                
                <SleepForm
                values={formValues}
                inputChange={inputChange}
                submit={submit}
                disabled={disabled}
                errors={formErrors}
                />

                {sleep.map((sleep)=>{
                    return <Sleep key={sleep.id} details={sleep}/>;
                })}
             </div>
            </div>
    );
}
export default App;
