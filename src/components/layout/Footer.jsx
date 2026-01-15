import { FacebookIcon,InstagramIcon,WhatsAppIcon,XIcon } from "../icons";
const Footer = () => (
  <footer className="bg-black text-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-3xl font-bold tracking-wider mb-4">VYNKO</h2>
          <p className="text-gray-400">
            Vynko delivers raw, edgy streetwear built for the bold. Quality-driven, design-forward, and unapologetically original.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-white">&gt; All Products</a></li>
            <li><a href="/" className="hover:text-white">&gt; T-Shirts</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="returns-and-exchange-policy" className="hover:text-white">&gt; Returns and Exchange</a></li>
            <li><a href="/" className="hover:text-white">&gt; Terms of Service</a></li>
            <li><a href="privacy-policy" className="hover:text-white">&gt; Privacy Policy</a></li>
            <li><a href="contact-us" className="hover:text-white">&gt; Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white"><FacebookIcon /></a>
            <a href="#" className="text-gray-400 hover:text-white"><XIcon /></a>
            <a href="#" className="text-gray-400 hover:text-white"><InstagramIcon /></a>
            <a href="#" className="text-gray-400 hover:text-white"><WhatsAppIcon /></a>
        </div>
        <p className="text-gray-500 text-sm mt-4 sm:mt-0">&copy; {new Date().getFullYear()} VYNKO. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;