import ContactPic from "./Contact.png"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";



export const ContactNew = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hn461on', 'template_jr4ebve', form.current, {
        publicKey: 'gHr0Z3kekVSB36fTe',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  function Handling() {
    alert("Your message is sent succesfully")
  }

  return (
    <>
      {/* <Header></Header> */}
      <div className="p-5 m-5">


        <h1 className="text-5xl font-bold text-center underline p-5 m-5">EMAIL US NOW </h1>
        <div id="maincontactdiv" className="flex justify-around">

          <div id="formfilling" className="form flex items-center border-2 h-[fit-content] mt-24 p-14">

            <form ref={form} onSubmit={sendEmail}>
              <label >Name</label>
              <input className="p-2" type="text" name="user_name" />
              <label>Email</label>
              <input className="p-2" type="email" name="user_email" />
              <label>Message</label>
              <textarea className="p-2" name="message" />
              <br></br>
              <input onClick={Handling} id="final" type="submit" value="Send" />

            </form>
          </div>
          <div id="contactIMG">
            <img src={ContactPic}></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactNew
