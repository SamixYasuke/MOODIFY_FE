const Header = () => {
  return (
    <header className="bg-blue-500 flex justify-between items-center p-2">
      <div className="flex items-center">
        <img
          className="w-32 h-32 object-contain"
          src="/images/Logo.png"
          alt="Moodify Logo"
        />
      </div>
      <ul className="flex space-x-4">
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
            FaQ
          </a>
        </li>
      </ul>
      <div className="bg-white text-black box-content py-4 px-3 text-sm border-black border-2 rounded-lg">
        <a href="/download">Download App</a>
      </div>
    </header>
  );
};

export default Header;
