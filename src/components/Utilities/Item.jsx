import Image from "next/image";

const Item = (props) => {
  return (
    <div className="col-md-6 col-lg-4 mb-5">
      <div
        className="portfolio-item mx-auto"
        data-bs-toggle="modal"
        data-bs-target={props.modalTarget}
      >
        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
          <div className="portfolio-item-caption-content text-center text-white">
            <i className="fas fa-plus fa-3x"></i>
          </div>
        </div>
        <Image
          className="w-full max-h-64 object-cover rounded-t"
          src={props.imageSrc}
          width={500} // Atur lebar gambar sesuai kebutuhan
          height={300} // Atur tinggi gambar sesuai kebutuhan
          alt="..."
        />
      </div>
    </div>
  );
};

export default Item;
