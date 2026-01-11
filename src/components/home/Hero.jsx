import heroLogo from "../../assets/banner_size_layout.png"

const Hero = () => (
  <div className="w-full py-0"> {/* Removed background color & padding */}
    <div className="w-full">
      <img 
        src={heroLogo} 
        alt="Model wearing Disorder t-shirt" 
        className="w-full h-auto object-cover" // Full width image
      />
    </div>

  </div>
);

export default Hero;
