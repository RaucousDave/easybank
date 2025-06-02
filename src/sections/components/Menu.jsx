import { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 z-50  top-4 right-4 "
      >
        {!isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="11">
            <g fill="hsl(233, 26%, 24%)" fill-rule="evenodd">
              <path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z" />
            </g>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19">
            <g fill="hsl(233, 26%, 24%)" fill-rule="evenodd">
              <path d="M.868.661l16.97 16.97-.706.708L.162 1.369z" />
              <path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z" />
            </g>
          </svg>
        )}
      </button>

      {/* Overlay */}
      {isOpen && <div onClick={toggleMenu}></div>}

      {/* Slide-in Menu */}
      <div
        className={`absolute top-8 right-0 h-64 w-full text-center bg-veryLightGray text-darkBlue z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-10" : "-translate-y-[200rem]"
        }`}
      >
        <nav className="p-6 space-y-4">
          <a href="#home" className="block hover:text-green-400">
            Home
          </a>
          <a href="#about" className="block hover:text-green-400">
            About
          </a>
          <a href="#projects" className="block hover:text-green-400">
            Projects
          </a>
          <a href="#contact" className="block hover:text-green-400">
            Contact
          </a>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
