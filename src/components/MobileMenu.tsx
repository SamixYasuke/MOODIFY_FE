import { RxHamburgerMenu } from "react-icons/rx";

const MobileMenu: React.FC = () => {
  return (
    <div className="bg-white flex justify-between items-center px-5 py-4 sm:px-7 sm:py-4 border border-[rgb(96,181,255,1)] rounded-lg">
      <RxHamburgerMenu size={20} className="text-[rgb(34,63,89,1)] font-bold" />
    </div>
  );
};

export default MobileMenu;
