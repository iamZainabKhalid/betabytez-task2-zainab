import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.name === "" || formData.email === "" || formData.message === "") {
      setStatus("Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    setStatus(`Thanks, ${formData.name}! Your message has been received.`);
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact">
      <p className="eyebrow">GET IN TOUCH</p>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          id="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          id="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="btn-cta">Send Message</button>
        <p id="form-status">{status}</p>
      </form>
    </section>
  );
}

export default Contact;