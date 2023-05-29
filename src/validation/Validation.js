import * as Yup from 'yup'


    export const validationShema = Yup.object().shape({
        name: Yup.string().min(2, 'Too Short!').required('Name is required'),
        phone: Yup.string().required('Phone is required'),
        email: Yup.string().email('Invalid email').required('Must be a valid email'),
        // avatar: Yup.string().url('Invalid url').required('Avatar is required'),

         avatar: Yup.string().required('Avatar is required'),

        // avatar: Yup.mixed()
        // .test('fileFormat', 'x', (value)=>['image/jpeg', 'img/png', 'img/gif'].includes(value.type))
        // .test('file/size', 'size x', (value) => value.size <= 5000000).required('change avatar'),
        gender: Yup.string().oneOf(['men', 'women'], 'unicorn').required('gender is required'),
        status: Yup.string().oneOf(['Work', 'Family', 'Private', 'Friends'], 'status gender').required('status is required'),
        favorite: Yup.boolean()
      
    })