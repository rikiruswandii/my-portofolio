
const Contact = () => {
  return (
    <section className="page-section" id="contact">
      <div className="container mx-auto">
        {/* Contact Section Heading */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Contact Me
        </h2>
        {/* Icon Divider */}
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        {/* Contact Section Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
          <div className="col-lg-8 col-xl-7">
            {/* SB Forms Contact Form */}
            <form id="contactForm" className="p-4">
              {/* Name input */}
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Enter your name..."
                  required
                />
                <label htmlFor="name">Full name</label>
                <div className="invalid-feedback">A name is required.</div>
              </div>
              {/* Email address input */}
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                />
                <label htmlFor="email">Email address</label>
                <div className="invalid-feedback">An email is required.</div>
                <div className="invalid-feedback">Email is not valid.</div>
              </div>
              {/* Phone number input */}
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  required
                />
                <label htmlFor="phone">Phone number</label>
                <div className="invalid-feedback">
                  A phone number is required.
                </div>
              </div>
              {/* Message input */}
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  id="message"
                  type="text"
                  placeholder="Enter your message here..."
                  style={{ height: "10rem" }}
                  required
                ></textarea>
                <label htmlFor="message">Message</label>
                <div className="invalid-feedback">A message is required.</div>
              </div>
              {/* Submit Button */}
              <button className="btn btn-primary btn-xl" type="submit">
                Send
              </button>
              {/* Submit success message */}
              <div className="text-center mt-3">
                <div className="d-none" id="submitSuccessMessage">
                  <div className="fw-bold">Form submission successful!</div>
                  To activate this form, sign up at
                  <br />
                  <a href="https://startbootstrap.com/solution/contact-forms">
                    https://startbootstrap.com/solution/contact-forms
                  </a>
                </div>
              </div>
              {/* Submit error message */}
              <div className="text-center mt-3">
                <div className="d-none text-danger" id="submitErrorMessage">
                  Error sending message!
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
