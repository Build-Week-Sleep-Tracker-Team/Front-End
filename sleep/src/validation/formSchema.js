import *as yup from 'yup'
const formSchema = yup.object().shape({
    username:yup
    .string()
    .min(2, 'must be at least 2 characters in length')
    .required('you must enter a username'),

    password:yup
    .string()
    .min(5, "must be at least 5 characters in length")
    .required('must enter a password'),

 mood:yup
 .string()
 .min(3,"must be at least 3 characters in length")
 .required('must feel a type of way'),

    start:yup
    .string()
    .min(4,'must be at least 4 characters in length')
    .required('enter a start time'),

    stop:yup
    .string()
    .min(4,'must be at least 4 characters in length')
    .required('enter a time'),
})

export default formSchema