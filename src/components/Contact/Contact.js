import React from 'react'
import './Contact.css'
import Useform from './Useform';
import validate from './ValidateForm';


function Contact({submitForm}) {
    const { handleChange, values, handleSubmit, errors} = Useform(submitForm, validate);
  return (
    <>
      <div className="contact-section">
        <div className="container">
            <div className="contact-content">
                <img src="./images/pattern-rings.svg" alt="" className='contact-rings' />
                <div className="contact-header">
                    <h2>Contact</h2>
                    <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
                </div>

                <form action="" className="form" onSubmit={handleSubmit}>
                    <div className="form-fields">
                        <input 
                        id='username'
                        type="text" 
                        name='username' 
                        className="form-input"
                        placeholder='NAME'
                        value={values.username}
                        onChange={handleChange}
                        />
                        {errors.username && <p>{errors.username}</p>}
                    </div>
                    <div className="form-fields">
                        <input 
                        id='email'
                        type="email" 
                        name='email' 
                        className="form-input"
                        placeholder='EMAIL'
                        value={values.email}
                        onChange={handleChange}
                        />
                        {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div className="form-fields">
                        <textarea 
                        id='message'
                        type="text" 
                        name='message' 
                        className="form-input"
                        placeholder='MESSAGE'
                        value={values.message}
                        onChange={handleChange}
                        maxLength={200}
                        />
                        {errors.message && <p>{errors.message}</p>}
                    </div>

                    <div>
                        <button className="btn form-btn" type='submit'>
                            SEND MESSAGE
                        </button>

                    </div>

                </form>

            </div>
        </div>
      </div>
    </>
  )
}

export default Contact
