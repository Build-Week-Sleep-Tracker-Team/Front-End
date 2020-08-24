import *as yup from 'yup'
const formSchema = yup.object().shape({
    name:yup
    .string()
    .min(2, 'must be at least 2 characters in length'),

    date:yup
    .string()
    .min(10, "must be at least 10 characters in length")
    .required('format xx/xx/xxxx'),

    start:yup
    .string()
    .min(4,'must be at least 4 characters in length')
    .required('example 3:00'),

    stop:yup
    .string()
    .min(4,'must be at least 4 characters in length')
    .required('example 3:00'),
})

export default formSchema