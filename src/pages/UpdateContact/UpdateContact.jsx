import './UpdateContact.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validationShema } from '../../validation/Validation';
import { useNavigate, useParams } from 'react-router-dom';
import React from 'react';

const UpdateContact = ({ stor, setStor }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const initialValues = stor.find((contact) => contact.id === id) || {
    id: '',
    name: '',
    phone: '',
    email: '',
    avatar: '',
    gender: '',
    status: '',
    favorite: '',
  };


const handleSubmit = (values) => {
  console.log(values);
  const updatedContact = { ...values, id }; 
  const updatedStor = stor.map((contact) => (contact.id === id ? updatedContact : contact)); 
  setStor(updatedStor); 
  navigate('/');
};

  return (
    <div className="container_nc">
      <Formik initialValues={initialValues} validationSchema={validationShema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="nc">
            <div id="label_column">
              <div className="div_label">
                <label htmlFor="name">Name</label>
                <Field type="text" name="name" />
                <ErrorMessage component="p" name="name" />
              </div>

              <div className="div_label">
                <label htmlFor="phone">Phone</label>
                <Field type="text" name="phone" />
                <ErrorMessage component="p" name="phone" />
              </div>

              <div className="div_label">
                <label htmlFor="email">Email</label>
                <Field type="text" name="email" />
                <ErrorMessage component="p" name="email" />
              </div>

              <div className="div_label">
                <label htmlFor="avatar">Avatar</label>
                <Field type="number" name="avatar" min={0} max={99} />
                <ErrorMessage component="p" name="avatar" />
              </div>

              <div className="div_label">
                <label htmlFor="gender">Gender</label>
                <Field as="select" name="gender">
                  <option value="">Choose gender</option>
                  <option value="men">men</option>
                  <option value="women">women</option>
                </Field>
                <ErrorMessage component="p" name="gender" />
              </div>

              <div className="div_label">
                <label htmlFor="status">Status</label>
                <Field as="select" name="status">
                  <option value="">Choose status</option>
                  <option value="Work">Work</option>
                  <option value="Family">Family</option>
                  <option value="Private">Private</option>
                  <option value="Friends">Friends</option>
                </Field>
                <ErrorMessage component="p" name="status" />
              </div>

              <div className="div_label">
                <label htmlFor="favorite">Favorite</label>
                <Field type="checkbox" name="favorite" id="favor" />
              </div>
            </div>

            <div id="btn_div">
              <div>
                <button type="submit" className="btn btn-outline-success text-warning border-warning" disabled={isSubmitting}>
                  Edit
                </button>
              </div>
              <div>
                <p id="btn_text" className="text-warning">
                  Contact
                </p>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UpdateContact;