import './Contact.css'
import React from 'react'

function Contact() {
    const name = 'Damilola Adeleke'
  return (
    <div className='contact'>
        <div className="container">
            <h1>Contact Me</h1>
            <p>Hi there, contact me to ask about anything you have in mind.</p>
            <form>
                <div className='names'>
                    <div className='details'>
                        <label for='first_name'>
                            First name
                        </label>
                        <input type="text" placeholder='Enter your first name' name='first_name' id='first_name' required/>
                    </div>

                    <div className='details'>
                        <label for='last_name'>
                            Last name
                        </label>
                        <input type="text" placeholder='Enter your last name' name='last_name' id='last_name' required/>
                    </div>
                </div>

                <label for='email'>Email</label>
                <input type="text" id='email' placeholder='yourname@email.com' name='email' required/>

                <label>Message</label>
                <textarea name="Message" id="message" cols="30" rows="10" placeholder="Send me a message and I'll reply you as soon as possible" required></textarea>
                <div className='terms'>
                    <input type="checkbox" name="check" id="check" />
                    <label>
                        You agree to providing your data {name} who may contact you
                    </label>
                </div>
                <button type='submit' id='btn__submit'> Send message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact