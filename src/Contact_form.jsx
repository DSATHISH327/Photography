import React, { useState } from 'react'
import './Contact_form.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact_form = () => {
  const [First_name,setFirst_name]=useState("");
  const [Last_name, setLast_name]=useState("");
  const [Email,setEmail]=useState("");
  const [Phonenumber,setPhonenumber]=useState();
  const [Address,setAddress]=useState("");
  const Success = () => {
    toast.success("🎉 Success! Your Appointment has been Booked! ✅", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      theme: "colored",
    });
  };
  
  const Failure = () => {
    toast.warn("⚠️ Please fill in all the fields", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      theme: "colored",
    });
  };
  
    const Book_an_Appointment =()=>{
    if(First_name.trim()=== "" || Last_name.trim()=== "" || Email.trim() === "" || Phonenumber.trim()=== "" || Address.trim()=== ""){
      Failure();
    }
    else{
      Success();
    }
    }
  return (
    <>
      <section className='section'>
      <fieldset>
      <legend><h1>GET IN TOUCH</h1></legend>
        <main className='names'>
            <label htmlFor="First_name">First Name</label>
            <br />
            <input type="text" name="First_name" id="First_Name" value={First_name}onChange={((e)=>{setFirst_name(e.target.value)})} required/>
            <br />
            <label htmlFor="Last_name">Last Name</label>
            <br />
            <input type="text" name="Last_name" id="Last_name" value={Last_name} onChange={((e)=>{setLast_name(e.target.value)})} required/>
        </main>
        <main className='mail_phone_no'>
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" name="email" id="email" value={Email} onChange={((e)=>{setEmail(e.target.value)})} required />
            <br />
            <label htmlFor="Phone_number">Phone Number</label> 
            <br />
            <input type="tel" name="Phone_number" id="Phone_number" value={Phonenumber} onChange={((e)=>{setPhonenumber(e.target.value)})} required/>
        </main>
        <main className='Address'>
            <label htmlFor="Address">Address</label>
            <br />
            <textarea name="Address" id="Address" rows="5" cols="40" placeholder="Type your Address Here..." value={Address} onChange={((e)=>{setAddress(e.target.value)})} required></textarea>
        </main>
        <main className='Submit'>
            <button type="submit" aria-label="Submit the form" onClick={Book_an_Appointment} >SUBMIT</button>
        </main>
        </fieldset>
        <ToastContainer />
      </section>
    </>
  )
}

export default Contact_form
