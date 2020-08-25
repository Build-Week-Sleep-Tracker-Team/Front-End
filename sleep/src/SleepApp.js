import React, {useState, useEffect} from 'react';
import axios from 'axios';
import *as yup from 'yup';
import './App.css';
import Sleep from './components/Sleep';
import SleepForm from './components/SleepForm';
import formSchema from './validation/formSchema';


const initialFormValues={
    mood:'',
    sleepStart:'',
    sleepEnd:'',
};


const initialFormErrors ={
    mood:'',
    sleepStart:'',
    sleepEnd:'',
};

const initialSleep=[]
const initialDisabled = true

const App = () => {
    const [formValues, setFormValues]=useState(initialFormValues)
    const[formErrors, setFormErrors]=useState(initialFormErrors)
    const[disabled, setDisabled]=useState(initialDisabled)
    const[sleep,setSleep]=useState(initialSleep)

    useEffect(()=>{
    axios.get('https://my-sleep-tracker.herokuapp.com/api/users')
        .then(res=>{
            setSleep(res.data);
        })
        .catch(err=>{
           console.log(err)
        });
    },[])
   
    
const postNewSleep = newSleep=>{
    axios.post('https://my-sleep-tracker.herokuapp.com/api/users', newSleep)
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
    }
        const submit = () =>{
            const newSleep = {
                Mood: formValues.mood,
                Start: formValues.sleepStart,
                Stop: formValues.sleepStop,
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
    
        return (
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
