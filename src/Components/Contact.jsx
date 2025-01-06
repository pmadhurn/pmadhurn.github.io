import { useState } from "react";
import './contacts.css'

const Contact = () => {


  const [user , setUser] = useState({
    fname:"",
    lname: "",
    email: "",
    phone: "",
    message: ""
  })

  const userReg = (e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }

  const formHandeling = (e)=>{
    e.preventDefault()
    console.log(user);
  } 

  return (
    <>
      <div>
        <h1>Contact Me</h1>
        <p>Email: pmadhurn@gmail.com</p>
        <p>Phone: +91 9016273812 </p>

        <div className="formf">

          <br /> <p> Or <br />Leave a Message for me here</p> <br/>
          <form onSubmit={formHandeling}>
            <label htmlFor="fname">First Name:</label><br />
            <input type="text" id="fname" name="fname" value={user.fname} onChange={userReg} required /><br />

            <label htmlFor="lname">Last Name:</label><br />
            <input type="text" id="lname" name="lname" value={user.lname} onChange={userReg} required /><br />

            <label htmlFor="email">Email:</label><br />
            <input type="email" id="email" name="email" value={user.email} onChange={userReg} required /><br />

            <label htmlFor="phone">Phone:</label><br />
            <input type="tel" id="phone" name="phone" value={user.phone} onChange={userReg}/><br />

            <label htmlFor="message">Message:</label><br />
            <textarea id="message" name="message" value={user.message} onChange={userReg}></textarea><br />

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
