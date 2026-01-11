import { SearchIcon,HeartIcon,CartIcon,UserIcon } from "../icons";
import logo from "../../assets/vynko-logo-small.png"
const Header = ({ onCartClick, onLoginClick }) => (
  <header className="bg-white text-black sticky top-0 z-40 shadow-sm">
    <div className="bg-black text-white text-center text-sm py-2">
      USE "FANDF" AND GET 10% OFF
    </div>
    <nav className="container mx-auto px-2 lg:px-8 ">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0 ">
          <img
            src={logo} 
            alt="VYNKO Logo"
            className="lg:h-30 md:h-26 h-22" 
          />
        </div>
        <div className="hidden md:block">
          {/* Future navigation links can go here */}
        </div>
        <div className="flex items-center space-x-4">
          <button className="hover:text-gray-600"><SearchIcon /></button>
          <button className="hover:text-gray-600"><HeartIcon /></button>
          <button onClick={onCartClick} className="hover:text-gray-600"><CartIcon /></button>
          <button onClick={onLoginClick} className="hover:text-gray-600"><UserIcon /></button>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;