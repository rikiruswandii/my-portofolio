import { useState } from "react";
import Item from "@/components/Utilities/Item";
import Modal from "@/components/Utilities/Modal";

const Portfolio = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalId) => {
    setActiveModal(modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

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
              modalTarget="portfolioModal1"
              imageSrc="/assets/img/portfolio/cabin.png"
              onOpen={() => openModal("portfolioModal1")}
            />
            <Item
              modalTarget="portfolioModal2"
              imageSrc="/assets/img/portfolio/cake.png"
              onOpen={() => openModal("portfolioModal2")}
            />
            <Item
              modalTarget="portfolioModal3"
              imageSrc="/assets/img/portfolio/circus.png"
              onOpen={() => openModal("portfolioModal3")}
            />
            <Item
              modalTarget="portfolioModal4"
              imageSrc="/assets/img/portfolio/game.png"
              onOpen={() => openModal("portfolioModal4")}
            />
            <Item
              modalTarget="portfolioModal5"
              imageSrc="/assets/img/portfolio/safe.png"
              onOpen={() => openModal("portfolioModal5")}
            />
            <Item
              modalTarget="portfolioModal6"
              imageSrc="/assets/img/portfolio/submarine.png"
              onOpen={() => openModal("portfolioModal6")}
            />
          </div>
        </div>
      </section>

      {/* Portfolio Modals */}
      <Modal
        isOpen={activeModal === "portfolioModal1"}
        onClose={closeModal}
        modalId="portfolioModal1"
        title="Log Cabin"
        imageSrc="/assets/img/portfolio/cabin.png"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
      />
      <Modal
        isOpen={activeModal === "portfolioModal2"}
        onClose={closeModal}
        modalId="portfolioModal2"
        title="Tasty Cake"
        imageSrc="/assets/img/portfolio/cake.png"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
      />
      <Modal
        isOpen={activeModal === "portfolioModal3"}
        onClose={closeModal}
        modalId="portfolioModal3"
        title="Circus Tent"
        imageSrc="/assets/img/portfolio/circus.png"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
      />
      <Modal
        isOpen={activeModal === "portfolioModal4"}
        onClose={closeModal}
        modalId="portfolioModal4"
        title="Controller"
        imageSrc="/assets/img/portfolio/game.png"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ips"
      />
      <Modal
        isOpen={activeModal === "portfolioModal5"}
        onClose={closeModal}
        modalId="portfolioModal5"
        title="Locked Safe"
        imageSrc="/assets/img/portfolio/safe.png"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
      />
      <Modal
        isOpen={activeModal === "portfolioModal6"}
        onClose={closeModal}
        modalId="portfolioModal6"
        title="Submarine"
        imageSrc="/assets/img/portfolio/submarine.png"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
      />
    </>
  );
};

export default Portfolio;
