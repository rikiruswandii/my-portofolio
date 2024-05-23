import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer text-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Footer Location */}
          <div className="mb-5 md:mb-0">
            <h4 className="text-uppercase mb-4">Location</h4>
            <p className="lead mb-0">
              Jalan Nuansa Indah Bersamamu No.12
              <br />
              Asgard 21314
            </p>
          </div>
          {/* Footer Social Icons */}
          <div className="mb-5 md:mb-0 text-center">
            <h4 className="text-uppercase mb-4">Social Media</h4>
            <div className="flex justify-center space-x-4">
              <a className="text-white hover:text-blue-500" href="#!">
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a className="text-white hover:text-pink-500" href="#!">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a className="text-white hover:text-blue-400" href="#!">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a className="text-white hover:text-red-500" href="#!">
                <FaEnvelope className="w-6 h-6" />
              </a>
            </div>
          </div>
          {/* Footer About Text */}
          <div>
            <h4 className="text-uppercase mb-4">About Me</h4>
            <p className="lead mb-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum ab
              sit non sint autem voluptatibus aliquam similique doloremque
              beatae, minima voluptas eius id debitis, veniam perspiciatis.
              Dolorum ipsa et commodi!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
