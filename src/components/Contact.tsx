import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { useState } from "react";
import "./styles/Contact.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && message) {
      window.location.href = `mailto:virajthukrul0404@gmail.com?subject=Let's work together&body=${encodeURIComponent(
        `Email: ${email}\n\nMessage:\n${message}`
      )}`;
      setEmail("");
      setMessage("");
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        {/* Let's Work Together Section */}
        <div className="lets-work-section">
          <div className="lets-work-content">
            <h2 className="lets-work-title">Let's Work Together</h2>
            <p className="lets-work-subtitle">
              Got an idea or want to collaborate? Reach out and let's create something amazing together.
            </p>
            <form className="work-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Tell me about your project..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="form-textarea"
                  rows={4}
                ></textarea>
              </div>
              <button type="submit" className="form-submit">
                Send Message
              </button>
              {submitted && <p className="form-success">Message sent! Check your email.</p>}
            </form>
          </div>
        </div>

        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:virajthukrul0404@gmail.com" data-cursor="disable">
                virajthukrul0404@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>B.Tech in Engineering</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/virajthukrul0404-stack"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/viraj-thukrul-7073113aa"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com/viraj_thuk64094"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/thk.viraj"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Viraj Thukrul</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
