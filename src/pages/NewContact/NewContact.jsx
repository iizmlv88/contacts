import './NewContact.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import {validationShema} from '../../validation/Validation'

import {v4 as uuidv4} from 'uuid'


import { useNavigate } from 'react-router-dom'

const NewContact = ({onNewContact}) => {
    const initialValues = {
            id: uuidv4(),
            name: '',
            phone: '',
            email: '',
            avatar: '',
            gender: '',
            status: '',
            favorite: ''
        }



    const navigate = useNavigate();

    const handleSubmit = (values) => {
        console.log(values);
        onNewContact(values)
        navigate('/')
    }


    return (
        
        
    
        
        <div className='container_nc'>
            {/* <h1 className='text-center'>NewContact</h1> */}
            <Formik initialValues={initialValues} validationSchema={validationShema} onSubmit={handleSubmit}>
                {({ isSubmitting})=>(
                    //  {({ isSubmitting, setFieldValue})=>(
                <Form className='nc'>
                    <div id='label_column'>
                    <div className='div_label'>
                        <label htmlFor='name'>Name</label>
                        <Field type='text' name='name'/>
                        <ErrorMessage component='p' name='name' />
                    </div>

                    <div className='div_label'>
                        <label htmlFor='phone'>Phone</label>
                        <Field type='text' name='phone'/>
                        <ErrorMessage component='p' name='phone' />
                    </div>

                     <div className='div_label'>
                        <label htmlFor='email'>Email</label>
                        <Field type='text' name='email'/>
                        <ErrorMessage component='p' name='email' />
                    </div>

                     {/* <div>
                        <label htmlFor='avatar'>Avatar</label>
                        <Field type='text' name='avatar'/>
                        <ErrorMessage name='avatar' />
                    </div> */}
                    <div>
                        <label htmlFor='avatar'>Avatar</label>
                        <Field type='number' name='avatar' min={0} max={99}/>
                        <ErrorMessage name='avatar' />
                    </div>
                    {/* <div className='div_label'>
                        <label htmlFor='avatar'>Avatar</label>
                        <input type="file" name='avatar' id='avatar' onChange={(event) => { setFieldValue ('avatar', event.currentTarget.files[0])}}/>
                        <ErrorMessage component='p' name='avatar'/>
                    </div> */}
                     {/* <div>
                        <label htmlFor='avatar'>Avatar</label>
                        <Field type='link' name='avatar'/>
                        <ErrorMessage name='avatar' />
                    </div> */}

                    <div className='div_label'>
                        <label htmlFor='gender'>Gender</label>
                        <Field as='select' name='gender'>
                            <option value=''>Choose gender</option>
                            <option value='men'>men</option>
                            <option value='women'>women</option>
                        </Field>
                        <ErrorMessage component='p' name='gender' />
                    </div>

                   <div className='div_label'>
                        <label htmlFor='status'>Status</label>
                        <Field as='select' name='status'>
                            <option value=''>Choose status</option>
                            <option value='Work'>Work</option>
                            <option value='Family'>Family</option>
                            <option value='Private'>Private</option>
                            <option value='Friends'>Friends</option>
                        </Field>
                        <ErrorMessage component='p' name='status' />
                    </div>
                    
                    <div className='div_label'>
                        <label htmlFor='favorite'>Favorite</label>
                        <Field type='checkbox' name='favorite'  id='favor' />
                    </div>
                    </div>
                    
                    {/* <div id='btn_div' class="d-flex p-2, d-flex align-items-center">
                        <div><button type='submit' className='btn btn-primary btn-lg' disabled={isSubmitting}>add</button></div>
                        <div><h1 class="d-flex p-2, d-flex align-items-center">NewContact</h1></div>
                    </div> */}
                    <div id='btn_div'>
                        <div>
                            <button type='submit' className="btn btn-outline-success" disabled={isSubmitting}>Add</button>
                        </div>
                        <div><p id='btn_text'>New Contact</p></div>
                    </div>
                </Form>
            
            )}

            </Formik>
        </div>
     
    )
}
export default NewContact