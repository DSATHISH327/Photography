import React from 'react'
import './Contact_form.css'
const Contact_form = () => {
  return (
    <>
      <section className='section'>
      <fieldset>
      <legend><h1>GET IN TOUCH</h1></legend>
        <main className='names'>
            <label htmlFor="First_name">First Name</label>
            <br />
            <input type="text" name="First_name" id="First_Name" required/>
            <br />
            <label htmlFor="Last_name">Last Name</label>
            <br />
            <input type="text" name="Last_name" id="Last_name" required/>
        </main>
        <main className='mail_phone_no'>
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" name="email" id="email" required />
            <br />
            <label htmlFor="Phone_number">Phone Number</label>
            <br />
            <input type="tel" name="Phone_number" id="Phone_number" required/>
        </main>
        <main className='Address'>
            <label htmlFor="Address">Address</label>
            <br />
            <textarea name="Address" id="Address" rows="5" cols="40" placeholder="Type your Address Here..." required></textarea>
        </main>
        <main className='Submit'>
            <button type="submit" aria-label="Submit the form">SUBMIT</button>
        </main>
        </fieldset>
      </section>
    </>
  )
}

export default Contact_form
