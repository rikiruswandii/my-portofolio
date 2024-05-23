import Image from "next/image";
import { useState } from "react";

const Item = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="col-md-6 col-lg-4 mb-5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative cursor-pointer rounded overflow-hidden shadow"
        onClick={props.onOpen}
      >
        <div
          className={`absolute inset-0 bg-black flex items-center justify-center transition-opacity  duration-300 rounded ${
            isHovered ? "opacity-75" : "opacity-50"
          }`}
        >
          <div className="text-white text-center">
            <i className="fas fa-plus fa-3x"></i>
          </div>
        </div>
        <Image
          className="w-full h-64 object-cover rounded"
          src={props.imageSrc}
          width={500}
          height={300}
          alt="..."
        />
      </div>
    </div>
  );
};

export default Item;
