const Footer = () => {
  return (
    <footer className="bg-[rgba(34,63,89,1)] w-full py-28">
      <div className="flex flex-col lg:flex-row justify-around px-7 lg:px-0">
        <div className="flex justify-start lg:justify-center items-center pb-12 lg:pb-0">
          <img
            className="w-[130.8px]"
            src="/images/Logo.png"
            alt="moodify-icon"
          />
        </div>
        <div className="flex justify-between lg:justify-evenly items-center lg:gap-40">
          <ul className="flex flex-col lg:flex-row justify-center items-start lg:items-center gap-10 text-white font-semibold text-sm leading-6">
            <li>
              <a
                href="/home"
                className="hover:text-blue-300 hover:scale-105 transitionលtransition-transform duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/features"
                className="hover:text-blue-300 hover:scale-105 transition-transform duration-200"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/faqs"
                className="hover:text-blue-300 hover:scale-105 transition-transform duration-200"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="/download"
                className="hover:text-blue-300 hover:scale-105 transition-transform duration-200"
              >
                Download App
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-blue-300 hover:scale-105 transition-transform duration-200"
              >
                Contact
              </a>
            </li>
          </ul>

          <ul className="flex flex-col lg:flex-row justify-center items-start lg:items-center gap-10 text-white font-semibold text-sm leading-6">
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 hover:scale-105 transition-transform duration-200"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 hover:scale-105 transition-transform duration-200"
              >
                X
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 hover:scale-105 transition-transform duration-200"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mt-20 border-t border-[rgba(72,136,191,1)]">
        <p className="text-center text-white text-xs font-normal leading-5 pt-10">
          © {new Date().getFullYear()} Moodify. All rights reserved.
        </p>
        <ul className="font-normal text-[12px] leading-5 text-white flex flex-col md:flex-row justify-center items-start gap-9 md:gap-5 md:items-center pt-10">
          <li>
            <a
              href="/privacy-policy"
              className="hover:text-blue-300 hover:scale-105 transition-transform duration-200"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/terms-of-service"
              className="hover:text-blue-300 hover:scale-105 transition-transform duration-200"
            >
              Terms & Conditions
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
