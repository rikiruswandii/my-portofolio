
const About = () => {
  return (
    <section className="page-section bg-utama text-white mb-0" id="about">
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
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem adipisci quo ab exercitationem, assumenda dicta culpa aperiam nemo rem dolorum vitae amet officia explicabo praesentium ipsa unde reprehenderit eveniet nesciunt.
            </p>
          </div>
          <div className="p-4">
            <p className="text-lg">
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint dignissimos perspiciatis omnis? Atque nobis cupiditate architecto consectetur rerum fugiat magnam expedita iste assumenda voluptatem adipisci voluptate, voluptas harum nostrum omnis!
            </p>
          </div>
        </div>
        {/* About Section Button */}
        <div className="text-center mt-4">
          
        </div>
      </div>
    </section>
  );
};

export default About;
