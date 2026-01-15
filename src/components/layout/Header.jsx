import { useEffect, useState } from "react";
import { SearchIcon, HeartIcon, CartIcon, UserIcon } from "../icons";
import logo from "../../assets/vynko-logo-small.png";
import API from "../../util/API";

const Header = ({ onCartClick, onLoginClick }) => {
  const [animate, setAnimate] = useState(false);
  const [header, setHeader] = useState(false);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await API.get("/fetch-banner");
        const banner = response.data;

        setHeader(banner);
      } catch (error) {
        console.error("Failed to fetch banner images", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBanner();
  }, []);


  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <header className="bg-white text-black sticky top-0 z-40 shadow-sm">
      {/* Inline keyframes */}
      <style>
{`
  @keyframes logoVibrate {
    0%   { transform: rotate(0deg); }
    5%   { transform: rotate(-4deg); }
    10%  { transform: rotate(4deg); }
    15%  { transform: rotate(-3.4deg); }
    20%  { transform: rotate(3.4deg); }
    25%  { transform: rotate(-2.8deg); }
    30%  { transform: rotate(2.8deg); }
    35%  { transform: rotate(-2.2deg); }
    40%  { transform: rotate(2.2deg); }
    45%  { transform: rotate(-1.7deg); }
    50%  { transform: rotate(1.7deg); }
    55%  { transform: rotate(-1.3deg); }
    60%  { transform: rotate(1.3deg); }
    65%  { transform: rotate(-0.9deg); }
    70%  { transform: rotate(0.9deg); }
    75%  { transform: rotate(-0.6deg); }
    80%  { transform: rotate(0.6deg); }
    85%  { transform: rotate(-0.3deg); }
    90%  { transform: rotate(0.3deg); }
    100% { transform: rotate(0deg); }
  }
`}
</style>



      {header?.headerActive && <div className="bg-black text-white text-center text-sm py-2">
        {header?.headerText}
      </div>}

      <nav className="container mx-auto px-2 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="VYNKO Logo"
              className="lg:h-30 md:h-26 h-22"
              style={{
                transformOrigin: "center center",
                animation: animate
                  ? "logoVibrate 0.8s linear"
                  : "none",
              }}
            />
          </div>

          <div className="hidden md:block" />

          <div className="flex items-center space-x-4">
            {/* <button className="hover:text-gray-600"><SearchIcon /></button> */}
            {/* <button className="hover:text-gray-600"><HeartIcon /></button> */}
            <button onClick={onCartClick} className="hover:text-gray-600"><CartIcon /></button>
            {/* <button onClick={onLoginClick} className="hover:text-gray-600"><UserIcon /></button> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;