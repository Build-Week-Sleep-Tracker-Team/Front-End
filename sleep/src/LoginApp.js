import React, {useState, useEffect} from 'react';
import './App.css';
import formSchema from './validation/formSchema';
import LoginForm from './components/LoginForm'
import axios from 'axios'
import Login from './components/Login'
import *as yup from 'yup'

const initialLoginValues={
    username:'',
    password:'',
}
const initialLoginErrors={
    username:'',
    password:'',
}
const initialLogin=[]
const initialDisabled=true
const App = () => {
    const[loginValues, setLoginValues]=useState(initialLoginValues)
    const[loginErrors, setLoginErrors]=useState(initialLoginErrors)
    const[disabled, setDisabled]=useState(initialDisabled)
    const[login, setLogin]=useState(initialLogin)

    useEffect(()=>{
        axios.get('https://my-sleep-tracker.herokuapp.com/api/auth/login')
            .then(res=>{
                setLogin(res.data);
            })
            .catch(err=>{
               console.log(err)
            });
        },[])

    const postNewLogin =newLogin=>{
            axios.post('https://my-sleep-tracker.herokuapp.com/api/auth/login',newLogin)
            .then(res=>{
                setLoginValues([...loginErrors, res.data])
            })
            .catch(err=>{
                console.log(err)
            })
            .finally(()=>{
                setLoginValues(initialLoginValues)
            })
        }
        const inputChange=(username,value)=>{
            yup
            .reach(formSchema,username)
            .validate(value)
            .then(valid=>{
                setLoginErrors({
                    ...loginErrors,
                    [username]: '',
            })
            })
            .catch(err=>{
                setLoginErrors({
                ...loginErrors,
                [username]: err.errors[0],
            })
            })
            setLoginValues({
                ...loginValues,
                [username]:value,
            })
        }
            const submit = () =>{
                const newLogin = {
                    Username: loginValues.username,
                    Password: loginValues.password,
                }
                postNewLogin(newLogin)
            }
            useEffect(()=>{
                console.log(login)
            },[login])
        
            useEffect(()=>{
                formSchema.isValid(loginValues)
                .then(valid=>{
                    setDisabled(!valid);
                })
            },[loginValues])

            return (
                <div className='App'>
                    <div className='container'>
                        <header>
                            <h1>Login</h1>
                        </header>

                        <LoginForm
                        values={loginValues}
                        inputChange={inputChange}
                        submit={submit}
                        disabled={disabled}
                        errors={loginErrors}
                        />
                        
                          {login.map((login)=>{
                            return <Login key={login.id} details={login}/>;
                        })}
                     </div>
                    </div>
            );
    
    }
    export default App;
    


