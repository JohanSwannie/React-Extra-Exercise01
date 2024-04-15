import { useState } from "react";
import UserMessage from "./UserMessage";

function Contact() {
  const [userMessage, setUserMessage] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [imessage, setImessage] = useState("");
  const [contactComplete, setContactComplete] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (imessage.length < 20) {
      setUserMessage("The Message sent to us should be at least 20 characters");
    } else {
      setUserMessage(
        `Thank You for contacting us ${fullname}, We will respond to you as soon as possible`
      );
      setContactComplete(true);
      setFullname("");
      setEmail("");
      setImessage("");
      const inputs = document.getElementsByTagName("input");
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].disabled = true;
      }
      document.getElementById("message").disabled = true;
    }
  };

  return (
    <div className="relative top-20 grid justify-center content-center items-center text-center text-[#23286c] font-bold w-screen max-h-screen">
      <p className="mb-10 text-3xl">Contact Us</p>
      <form action="#" onSubmit={handleSubmit} className="grid w-96 mx-auto">
        <label htmlFor="fullname" className="mb-2">
          Full Name
        </label>
        <input
          type="text"
          name="fullname"
          value={fullname}
          onChange={(event) => setFullname(event.target.value)}
          required
          className="mb-2 border-2 border-blue-950"
        />
        <label htmlFor="email" className="mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className="mb-2 border-2 border-blue-950"
        />
        <label htmlFor="message" className="mb-2">
          Send us a message
        </label>
        <textarea
          name="message"
          value={imessage}
          id="message"
          onChange={(event) => setImessage(event.target.value)}
          cols="15"
          rows="11"
          minLength={20}
          maxLength={600}
          required
          className="mb-2 border-2 border-blue-950"
        ></textarea>
        <input
          type="submit"
          className="w-20 p-2 m-auto bg-blue-950 text-white"
        />
      </form>
      {contactComplete && <UserMessage userMessage={userMessage} />}
      {!contactComplete && (
        <h1 className="mt-10 h-12 text-xl">{userMessage}</h1>
      )}
    </div>
  );
}

export default Contact;
