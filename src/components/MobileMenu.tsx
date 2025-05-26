import { useEffect } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu = ({ isOpen, toggleMenu }: MobileMenuProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[rgba(34,63,89,1)] z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start p-6 pt-20">
          <ul className="flex flex-col gap-6 text-white font-semibold text-sm leading-6">
            <li>
              <a
                href="/home"
                className="hover:text-blue-300 focus:text-blue-300 active:text-blue-300 hover:scale-105 focus:scale-105 active:scale-105 transition-transform duration-200"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/features"
                className="hover:text-blue-300 focus:text-blue-300 active:text-blue-300 hover:scale-105 focus:scale-105 active:scale-105 transition-transform duration-200"
                onClick={toggleMenu}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/faqs"
                className="hover:text-blue-300 focus:text-blue-300 active:text-blue-300 hover:scale-105 focus:scale-105 active:scale-105 transition-transform duration-200"
                onClick={toggleMenu}
              >
                FAQs
              </a>
            </li>
            <div className="mt-6 flex justify-center items-center w-full">
              <a
                className="text-center inline-block w-40 md:w-48 bg-white text-[rgb(34,63,89)] font-semibold py-3 md:py-4 px-4 text-sm md:text-base border-2 border-[rgb(96,181,255)] rounded-lg hover:bg-[rgb(96,181,255)] active:bg-[rgb(96,181,255)] focus:bg-[rgb(96,181,255)] hover:text-white focus:text-white active:text-white hover:border-transparent active:border-transparent focus:border-transparent transition-all duration-300 ease-in-out transform hover:scale-105"
                href="https://animepahe.ru/"
              >
                Download App
              </a>
            </div>
          </ul>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/15 z-30 backdrop-blur-xs"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default MobileMenu;
