import React, {useState, useEffect} from 'react';
import './App.css';
import formSchema from './validation/formSchema';
import RegistrationForm from './components/RegistrationForm'
import axios from 'axios'
import *as yup from 'yup'
import Register from './components/Registration';

const initialRegistrationValues={
    username:'',
    password:'',
}
const initialRegistrationErrors={
    username:'',
    password:'',
}
const initialRegistration=[]
const initialDisabled=true
const App = () => {
    const[registrationValues, setRegistrationValues]=useState(initialRegistrationValues)
    const[registrationErrors, setRegistrationErrors]=useState(initialRegistrationErrors)
    const[disabled, setDisabled]=useState(initialDisabled)
    const[registration, setRegistration]=useState(initialRegistration)

    useEffect(()=>{
        axios.get('https://my-sleep-tracker.herokuapp.com/api/auth/register')
            .then(res=>{
                setRegistration(res.data);
            })
            .catch(err=>{
               console.log(err)
            });
        },[])

    const postNewRegistration = newRegistration=>{
            axios.post('https://my-sleep-tracker.herokuapp.com/api/auth/register', newRegistration)
            .then(res=>{
                setRegistrationValues([...registrationErrors, res.data])
            })
            .catch(err=>{
                console.log(err)
            })
            .finally(()=>{
                setRegistrationValues(initialRegistrationValues)
            })
        }
        const inputChange=(username,value)=>{
            yup
            .reach(formSchema,username)
            .validate(value)
            .then(valid=>{
                setRegistrationErrors({
                    ...registrationErrors,
                    [username]: '',
            })
            })
            .catch(err=>{
                setRegistrationErrors({
                ...registrationErrors,
                [username]: err.errors[0],
            })
            })
            setRegistrationValues({
                ...registrationValues,
                [username]:value,
            })
        }
            const submit = () =>{
                const newRegistration = {
                    Username: registrationValues.username,
                    Password: registrationValues.password,
                }
                postNewRegistration(newRegistration)
            }
            useEffect(()=>{
                console.log(registration)
            },[registration])
        
            useEffect(()=>{
                formSchema.isValid(registrationValues)
                .then(valid=>{
                    setDisabled(!valid);
                })
            },[registrationValues])

            return (
                <div className='App'>
                    <div className='container'>
                        <header>
                            <h1>Register</h1>
                        </header>

                        <RegistrationForm
                        values={registrationValues}
                        inputChange={inputChange}
                        submit={submit}
                        disabled={disabled}
                        errors={registrationErrors}
                        />
                        
                          {registration.map((register)=>{
                            return <Register key={register.id} details={register}/>;
                        })}
                     </div>
                    </div>
            );
    
    }
    export default App;
    


