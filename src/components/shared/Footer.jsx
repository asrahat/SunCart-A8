import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/10 pb-10">
   
          <div>
            <h2 className="text-3xl font-extrabold text-[#FF9F1C]">
              SunCart
            </h2>

            <p className="mt-4 text-gray-300 leading-relaxed">
              Your trusted destination for trendy and essential
              summer products. Stay stylish, cool, and ready for
              every sunny day.
            </p>
          </div>

    
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact Info
            </h3>

            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#FF9F1C]" />
                <p>+880 1234-567890</p>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#FF9F1C]" />
                <p>support@suncart.com</p>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#FF9F1C] mt-1" />
                <p>Sylhet, Bangladesh</p>
              </div>
            </div>
          </div>


          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-300">
              <Link
                href="/"
                className="hover:text-[#FF9F1C] duration-300"
              >
                Home
              </Link>

              <Link
                href="/products"
                className="hover:text-[#FF9F1C] duration-300"
              >
                Products
              </Link>

              <Link
                href="/privacy-policy"
                className="hover:text-[#FF9F1C] duration-300"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="hover:text-[#FF9F1C] duration-300"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>

       
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Follow Us
            </h3>

            <p className="text-gray-300 mb-5">
              Stay connected with us on social media.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="bg-white/10 p-3 rounded-full hover:bg-[#FF9F1C] duration-300"
              >
                <FaFacebookF size={18} />
              </Link>

              <Link
                href="/"
                className="bg-white/10 p-3 rounded-full hover:bg-[#FF9F1C] duration-300"
              >
                <FaInstagram size={18} />
              </Link>

              <Link
                href="/"
                className="bg-white/10 p-3 rounded-full hover:bg-[#FF9F1C] duration-300"
              >
                <FaTwitter size={18} />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} SunCart. All rights
            reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-[#FF9F1C] duration-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-[#FF9F1C] duration-300"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;