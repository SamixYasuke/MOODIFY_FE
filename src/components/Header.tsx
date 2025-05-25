import MobileMenu from "./MobileMenu";

const Header: React.FC = () => {
  return (
    <>
      <header className="bg-[rgb(34,60,83,1)] flex justify-between items-center px-6 md:px-14">
        <div className="flex items-center">
          <a href="/">
            <img
              className="w-28 h-24 md:w-24 md:h-28 object-contain"
              src="/images/Logo.png"
              alt="Moodify Logo"
            />
          </a>
        </div>
        <ul className="space-x-4 gap-10 hidden md:flex">
          <li>
            <a
              className="text-white hover:text-blue-300 hover:scale-105 transitionលtransition-transform duration-200"
              href="/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-white hover:text-blue-300 hover:scale-105 transitionលtransition-transform duration-200"
              href="/features"
            >
              Features
            </a>
          </li>
          <li>
            <a
              className="text-white hover:text-blue-300 hover:scale-105 transitionលtransition-transform duration-200"
              href="/faq"
            >
              Faq
            </a>
          </li>
        </ul>
        <div className="hidden md:flex gap-2 items-center justify-center w-[182px] text-center bg-white text-[rgb(34,63,89,1)] font-semibold box-content py-4 px-3 text-sm border-[rgb(96,181,255,1)] border-2 rounded-lg cursor-pointer group hover:bg-[rgb(96,181,255)] hover:text-white hover:border-transparent transition-all duration-300 ease-in-out transform">
          <p>Download App</p>
          <img
            className="w-[15.5px] h-[10.25px] object-contain ml-2 transition-transform duration-200 group-hover:-rotate-180"
            src="/images/arrow-down.png"
            alt="arrow facing down"
          />
        </div>
        <menu className="block md:hidden">
          <MobileMenu />
        </menu>
      </header>
    </>
  );
};

export default Header;
