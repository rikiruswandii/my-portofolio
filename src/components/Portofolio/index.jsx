import Item from "@/components/Utilities/Item";
import Modal from "@/components/Utilities/Modal";

const Portfolio = () => {
  return (
    <>
      {/* Portfolio Section */}
      <section className="page-section portfolio" id="portfolio">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Portfolio
          </h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <div className="row justify-content-center">
            <Item
              modalTarget="#portfolioModal1"
              imageSrc="/assets/img/portfolio/cabin.png"
            />
            <Item
              modalTarget="#portfolioModal2"
              imageSrc="/assets/img/portfolio/cake.png"
            />
            <Item
              modalTarget="#portfolioModal3"
              imageSrc="/assets/img/portfolio/circus.png"
            />
            <Item
              modalTarget="#portfolioModal4"
              imageSrc="/assets/img/portfolio/game.png"
            />
            <Item
              modalTarget="#portfolioModal5"
              imageSrc="/assets/img/portfolio/safe.png"
            />
            <Item
              modalTarget="#portfolioModal6"
              imageSrc="/assets/img/portfolio/submarine.png"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Modals */}
      <Modal
        modalId="portfolioModal1"
        title="Log Cabin"
        imageSrc="/assets/img/portfolio/cabin.png"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
      />
      <Modal
        modalId="portfolioModal2"
        title="Tasty Cake"
        imageSrc="/assets/img/portfolio/cake.png"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
      />
      <Modal
        modalId="portfolioModal3"
        title="Circus Tent"
        imageSrc="/assets/img/portfolio/circus.png"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
      />
      <Modal
        modalId="portfolioModal4"
        title="Controller"
        imageSrc="/assets/img/portfolio/game.png"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ips"
      />
    </>
  );
};

export default Portfolio;
