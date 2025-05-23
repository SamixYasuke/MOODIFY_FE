import MobileMenu from "./MobileMenu";

const Header: React.FC = () => {
  return (
    <>
      <header className="bg-blue-500 flex justify-between items-center px-7 md:px-14">
        <div className="flex items-center">
          <img
            className="w-28 h-32 md:w-24 md:h-28 object-contain"
            src="/images/Logo.png"
            alt="Moodify Logo"
          />
        </div>
        <ul className="space-x-4 gap-10 hidden md:flex">
          <li>
            <a className="text-white" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="text-white" href="/features">
              Features
            </a>
          </li>
          <li>
            <a className="text-white" href="/faq">
              Faq
            </a>
          </li>
        </ul>
        <div className="hidden md:flex gap-2 items-center justify-center w-[182px] text-center bg-white text-[rgb(34,63,89,1)] font-semibold box-content py-4 px-3 text-sm border-[rgb(96,181,255,1)] border-2 rounded-lg cursor-pointer group">
          <p>Download App</p>
          <img
            className="w-[15.5px] h-[10.25px] object-contain ml-2 transition-transform duration-200 group-hover:-translate-y-0.5"
            src="/images/arrow-down.png"
            alt="arrow facing down"
          />
        </div>
        <menu className="bloclk md:hidden">
          <MobileMenu />
        </menu>
      </header>
    </>
  );
};

export default Header;
