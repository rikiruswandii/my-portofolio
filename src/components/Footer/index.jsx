
const Footer = () => {
  return (
    <footer className="footer text-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Footer Location */}
          <div className="mb-5 md:mb-0">
            <h4 className="text-uppercase mb-4">Location</h4>
            <p className="lead mb-0">
              2215 John Daniel Drive
              <br />
              Clark, MO 65243
            </p>
          </div>
          {/* Footer Social Icons */}
          <div className="mb-5 md:mb-0">
            <h4 className="text-uppercase mb-4">Around the Web</h4>
            <div className="flex justify-center">
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <i className="fab fa-fw fa-facebook-f"></i>
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <i className="fab fa-fw fa-twitter"></i>
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <i className="fab fa-fw fa-linkedin-in"></i>
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <i className="fab fa-fw fa-dribbble"></i>
              </a>
            </div>
          </div>
          {/* Footer About Text */}
          <div>
            <h4 className="text-uppercase mb-4">About Freelancer</h4>
            <p className="lead mb-0">
              Freelance is a free to use, MIT licensed Bootstrap theme created
              by <a href="http://startbootstrap.com">Start Bootstrap</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
