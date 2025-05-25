import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileMenu from "./MobileMenu";

const MobileMenuBtn: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-white flex justify-between items-center px-5 py-4 sm:px-7 sm:py-4 border border-[rgb(96,181,255,1)] rounded-lg">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          <RxHamburgerMenu
            size={20}
            className="text-[rgb(34,63,89,1)] font-bold"
          />
        </button>
      </div>
      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default MobileMenuBtn;
