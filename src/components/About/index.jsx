
const About = () => {
  return (
    <section className="page-section bg-primary text-white mb-0" id="about">
      <div className="container mx-auto">
        {/* About Section Heading */}
        <h2 className="page-section-heading text-center text-uppercase text-white">
          About
        </h2>
        {/* Icon Divider */}
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        {/* About Section Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4">
            <p className="text-lg">
              Freelancer is a free bootstrap theme created by Start Bootstrap.
              The download includes the complete source files including HTML,
              CSS, and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="p-4">
            <p className="text-lg">
              You can create your own custom avatar for the masthead, change the
              icon in the dividers, and add your email address to the contact
              form to make it fully functional!
            </p>
          </div>
        </div>
        {/* About Section Button */}
        <div className="text-center mt-4">
          <a
            href="https://startbootstrap.com/theme/freelancer/"
            className="btn btn-xl btn-outline-light"
          >
            <i className="fas fa-download me-2"></i>
            Free Download!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
