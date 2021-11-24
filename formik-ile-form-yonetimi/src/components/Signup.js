import { useFormik, Formik, Field, Form } from 'formik';

import validationSchema from './validations';

import React from 'react'

import '../App.css'

function Signup() {
    const {handleSubmit, handleChange, handleBlur, values, errors, touched} = useFormik({
        initialValues: {
          email: '',
          password: '',
          passwordConfirm: '',
        },
        onSubmit: (values) => {
          console.log(values);
        },
        validationSchema,
      });
    
    console.log(errors);

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}/>
            <br/>
            { errors.email && touched.email && <div className="error" >{errors.email}</div>}
            <br/>

            <label htmlFor="email">Password</label>
            <input name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}/>
            <br/>
            { errors.password && touched.password && <div className="error" >{errors.password}</div>}

            <br/>

            <label htmlFor="email">Confirm Password</label>
            <input name="passwordConfirm"
            value={values.passwordConfirm}
            onChange={handleChange}
            onBlur={handleBlur}/>
            <br/>
            { errors.passwordConfirm && touched.passwordConfirm && <div className="error" >{errors.passwordConfirm}</div>}

            <br/>

            <button type="submit">Submit</button>

            <br/>
            <br/>

            <code>
            {
                JSON.stringify(values)
            }
            </code>
        </form>
    )
}

export default Signup
