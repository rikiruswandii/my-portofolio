import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  // Mengatur navbar agar shrink saat di-scroll
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("mainNav");
      if (window.scrollY > 100) {
        navbar.classList.add("navbar-shrink");
      } else {
        navbar.classList.remove("navbar-shrink");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Memperbaiki logika untuk menutup menu saat klik di luar menu
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarOpen && !event.target.closest("#navbarResponsive")) {
        setNavbarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [navbarOpen]);

  useEffect(() => {
    // Tambahkan delay kecil untuk memastikan setelah loading
    const timeout = setTimeout(() => {
      setInitialLoad(false);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <nav
      className={`bg-secondary text-white fixed top-0 w-full z-10 transition-all duration-300 ${
        navbarOpen || initialLoad ? "navbar-show" : ""
      }`}
      id="mainNav"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="#page-top">
          <span className="font-bold text-white cursor-pointer select-none text-2xl">
            <b>Mikeu</b> Portofolio
          </span>
        </Link>
        <button
          className="text-uppercase font-bold bg-primary text-white rounded lg:hidden"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
          aria-controls="navbarResponsive"
          aria-expanded={navbarOpen}
          aria-label="Toggle navigation"
        >
          Menu
          <i className={`fas fa-bars ml-2 ${navbarOpen ? "hidden" : ""}`}></i>
          <i className={`fas fa-times ml-2 ${navbarOpen ? "" : "hidden"}`}></i>
        </button>
        <div
          className={`w-full lg:flex lg:items-center lg:w-auto ${
            navbarOpen ? "block" : "hidden"
          }`}
          id="navbarResponsive"
        >
          <ul className="flex flex-col lg:flex-row lg:ml-auto text-white text-xl">
            <li className="nav-item mx-3">
              <Link
                href="#portfolio"
                className="no-underline text-color-primary hover:transition-transform"
              >
                <span className="nav-link cursor-pointer select-none">
                  Portofolio
                </span>
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link
                href="#about"
                className="no-underline text-color-primary hover:transition-transform"
              >
                <span className="nav-link cursor-pointer select-none">
                  About
                </span>
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link
                href="#skills"
                className="no-underline text-color-primary hover:transition-transform"
              >
                <span className="nav-link cursor-pointer select-none">
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
