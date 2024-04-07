import React from 'react'
import locationSvg from '../imgs/location-dot-solid.svg'
import phoneSvg from '../imgs/phone-volume-solid.svg'
import emailSvg from '../imgs/envelope-solid.svg'
import websiteSvg from '../imgs/globe-solid.svg'
import { Formik, useFormik } from 'formik';
import {signUpSchema} from "../schema/Validation/signUpSchema.jsx"
// import { signUpSchema } from '../schema'
const initialValues = {
    name: "",
    email: "",
    subject:"",
    textArea: "",
}
const Form = () => {
    const { values, errors,touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema:signUpSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    });
    return (
        <>
            <div className='form-div'>
                <form onSubmit={handleSubmit}>
                    <div className='input-data-div' >
                        <h2 className='get-in-touch-h2'>Get in touch</h2>
                        <div className='two-input-div'>
                        <div className='errorDiv1'>
                            <input className='nameInput'
                                name='name'
                                type='text'
                                placeholder='Name'
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            ></input>
                            { errors.name && touched.name?(<p className='errorInput1'>{errors.name}</p>)  : null}
                        </div>
                        <div className='errorDiv2'>
                            <input className='emailInput'
                                type='email'
                                name='email'
                                placeholder='Email'
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            ></input>
                            { errors.email && touched.email?(<p className='errorInput1'>{errors.email}</p>)  : null}
                        </div>
                        </div>
                        <div className='errorDiv3'>

                        <input className='subjectInput'
                            type='text'
                            name='subject'
                            placeholder='Subject'
                            value={values.subject}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        ></input>
                     { errors.subject && touched.subject?(<p className='errorInput1'>{errors.subject}</p>)  : null}

                        </div>
                        <div className='text-aera-div'>
                            <textarea className='messageTextarea'
                                placeholder='Message'
                                name='textArea'
                                value={values.textarea}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                cols={56} rows={6}>
                                </textarea>
                                { errors.textArea && touched.textArea?(<p className='errorInput1'>{errors.textArea}</p>)  : null}
                        </div>
                        <button className='sendBtn' type='submit' >Send Message</button>
                    </div>
                </form>
                <div className='address-data-div'>
                    <h2>Contact us</h2>
                    {/* ////////// 1 ///////////// */}
                    <div className='address-data-div-child'>
                        <img className='svg' src={locationSvg} alt='location-svg'></img>
                        <p> <span className='data-div-heading'>Address:</span> MR Center MA Jinah Road Okara Punjab Pakistan</p>
                    </div>
                    {/* ///////////// 2 /////////////// */}
                    <div className='address-data-div-child'>
                        <img className='svg' src={phoneSvg} alt='location-svg'></img>
                        <p> <span className='data-div-heading'>Phone:</span>+92 123456789</p>
                    </div>
                    {/* /////////////// 3 ////////////// */}
                    <div className='address-data-div-child'>
                        <img className='svg' src={emailSvg} alt='location-svg'></img>
                        <p> <span className='data-div-heading'>Email:</span> InvexTech@gmail.com</p>
                    </div>
                    {/* /////////////// 4 /////////////// */}
                    <div className='address-data-div-child'>
                        <img className='svg' src={websiteSvg} alt='location-svg'></img>
                        <p> <span className='data-div-heading'>Website:</span> InvexTech.com</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form