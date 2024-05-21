
const Header = () => {
  return (
    <header className="masthead bg-primary text-white text-center">
      <div className="container mx-auto flex flex-col items-center">
        {/* Masthead Avatar Image */}
        <img
          className="masthead-avatar mb-5"
          src="/assets/img/avataaars.svg"
          alt="..."
        />
        {/* Masthead Heading */}
        <h1 className="masthead-heading text-uppercase mb-0">
          Start Bootstrap
        </h1>
        {/* Icon Divider */}
        <div className="divider-custom divider-light flex items-center my-3">
          <div className="divider-custom-line flex-1 border-t border-white"></div>
          <div className="divider-custom-icon mx-3">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line flex-1 border-t border-white"></div>
        </div>
        {/* Masthead Subheading */}
        <p className="masthead-subheading font-light mb-0">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </header>
  );
};

export default Header;
