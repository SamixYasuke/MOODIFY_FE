const Footer = () => {
  return (
    <footer className="bg-[rgba(34,63,89,1)] w-full py-28">
      <div className="flex flex-col lg:flex-row justify-around px-7 lg:px-0">
        <div className="flex justify-start lg:justify-center items-center pb-12">
          <img
            className="w-[130.8px]"
            src="/images/Logo.png"
            alt="moodify-icon"
          />
        </div>
        <div className="flex justify-between lg:justify-evenly items-center lg:gap-40">
          <ul className="flex flex-col lg:flex-row justify-center items-start lg:items-center gap-10 text-white font-semibold text-sm leading-6">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/features">Features</a>
            </li>
            <li>
              <a href="/faqs">FAQs</a>
            </li>
            <li>
              <a href="/download">Download App</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>

          <ul className="flex flex-col lg:flex-row justify-center items-start lg:items-center gap-10 text-white font-semibold text-sm leading-6">
            <li>
              <a href="/instagram" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="/x" target="_blank" rel="noopener noreferrer">
                X
              </a>
            </li>
            <li>
              <a href="/linkedin" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-20 border-t border-[rgba(72,136,191,1)] px-10">
        <p className="text-center text-white text-xs font-normal leading-5 pt-10">
          © {new Date().getFullYear()} Moodify. All rights reserved.
        </p>
        <ul className="font-normal text-[12px] leading-5 text-white flex flex-col md:flex-row justify-center items-start gap-9 md:gap-5 md:items-center pt-10">
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms-of-service">Terms & Conditions</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
