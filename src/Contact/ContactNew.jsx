import ContactPic from "./Contact.png";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { motion } from 'framer-motion';


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_hn461on", "template_jr4ebve", form.current, {
        publicKey: "gHr0Z3kekVSB36fTe",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  function Handling() {
    alert("Your message is sent successfully");
  }

  return (
    <>
      <div id="maincontactdiv" className="flex justify-around flex-row">
        <motion.div
         initial={{ opacity: 0, x: -25 }}
          transition={{ duration: 1.5, delay: 0.1 }}
          whileInView={{ opacity: 1, x: 0 }}
         id="formfilling" className="form flex  flex-col items-center border-2 h-[fit-content] mt-24 p-14">
          <div>

            <h1 className="font-bold "> <span className="text-blue-800">Contact <span className="">Now</span> </span>  </h1>
          </div>
          <div>
            <form ref={form} onSubmit={sendEmail}>
              <input className="p-2" type="text" name="user_name" placeholder="Name" />
              <input className="p-2" type="email" name="user_email" placeholder="Email" />
              <textarea className="p-2" name="message" placeholder="Message" />
              <br />
              <input onClick={Handling} id="final" type="submit" value="Send" />
            </form>
          </div>
        </motion.div>
        <div id="contactIMG">
          <img src={ContactPic} alt="Contact" />
        </div>
      </div>
    </>
  );
};

export default Contact;
