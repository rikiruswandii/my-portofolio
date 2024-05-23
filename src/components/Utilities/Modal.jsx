import Image from "next/image";

const Modal = (props) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        props.isOpen ? "block" : "hidden"
      }`}
      aria-labelledby={props.modalId}
      aria-hidden={!props.isOpen}
    >
      <div className="fixed inset-0 bg-black bg-opacity-50"></div>
      <div className="relative w-auto max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex justify-end p-4 border-b border-gray-200">
          <button
            className="text-gray-500 hover:text-gray-700"
            type="button"
            onClick={props.onClose}
            aria-label="Close"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {props.title}
          </h2>
          <div className="flex items-center justify-center mb-4">
            <div className="border-t border-gray-300 flex-grow mr-2"></div>
            <div className="text-gray-500">
              <i className="fas fa-star"></i>
            </div>
            <div className="border-t border-gray-300 flex-grow ml-2"></div>
          </div>
          <div className="flex justify-center mb-5">
            {" "}
            {/* Tambahkan kelas flex dan justify-center di sini */}
            <Image
              className="rounded" // Menghapus mb-5 untuk menghindari jarak tambahan di bawah gambar
              src={props.imageSrc}
              width={500}
              height={300}
              alt={props.title}
            />
          </div>
          <p className="mb-4 text-gray-600">{props.description}</p>
          <button
            className="bg-secondary text-light hover:transition-all py-2 px-4 rounded"
            onClick={props.onClose}
          >
            <i className="fas fa-times fa-fw"></i>
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
