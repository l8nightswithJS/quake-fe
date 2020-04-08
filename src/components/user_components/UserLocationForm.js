import React from 'react';
import { Formik, Form, Field } from 'formik';
import { CountryDropdown } from 'react-country-region-selector';
import axios from 'axios';
import * as Yup from 'yup';
import "../Styles/LocationForm.scss";

const LocationSchema = Yup.object().shape({
    address1: Yup.string().required('please enter your street address'),
    address2: Yup.string(),
    city: Yup.string().required('please enter your city'),
    state: Yup.string().required('please enter your state/province/reagion'),
    zip: Yup.string().required('please enter your ZIP/postal code'),
    country: Yup.string().required('please enter your country')
});

function UserLocationForm(props) {
    return (
        <div className='userlocation-container'>
            <h3 className = "quake-head">Quake Live</h3>
            <h2 className = "real-time-notif">Real Time Notifications</h2>
            <Formik
                initialValues={{ address1:'', address2:'', city:'', state:'', zip:'', country:'' }}
                validationSchema={LocationSchema}
                onSubmit={async (values, { setSubmitting, setStatus }) => {
                    // axios.post('', values)
                    //     .then(res => {

                    //     })
                    //     .catch(res => {

                    //     });

                }}
            >
            {({ isSubmitting, errors, touched, handleChange, handleBlur, values }) => (
                <Form className='form'>
                    <Field
                        className='field'
                        type='text'
                        name='address1'
                        placeholder='Address Line1:'
                    />
                    {touched.address1 && errors.address1 && (
                    <p className="form-error">{errors.address1}</p>
                    )}
                    <Field
                        className='field'
                        type='text'
                        name='address2'
                        placeholder='Address Line2:'
                    />
                    {touched.address2 && errors.address2 && (
                    <p className="form-error">{errors.address2}</p>
                    )}
                    <Field
                        className='field'
                        type='text'
                        name='city'
                        placeholder='City:'
                    />
                    {touched.city && errors.city && (
                    <p className="form-error">{errors.city}</p>
                    )}
                    <Field
                        className='field'
                        type='text'
                        name='state'
                        placeholder='State:'
                    />
                    {touched.state && errors.state && (
                    <p className="form-error">{errors.state}</p>
                    )}
                    <Field
                        className='field'
                        type='text'
                        name='zip'
                        placeholder='ZIP / Postal Code:'
                    />
                    <CountryDropdown 
                        className='field'
                        name='country'
                        value={values.country}
                        onChange={(_, e) => handleChange(e)} 
                        onBlur={handleBlur}
                    />
                    {touched.zip && errors.zip && (
                    <p className="form-error">{errors.zip}</p>
                    )}
                    <button className='userlocation-button'>
                        Submit
                    </button>
                </Form>
            )}
            </Formik>
        </div>
    );
}

export default UserLocationForm;