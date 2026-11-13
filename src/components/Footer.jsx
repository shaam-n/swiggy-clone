import { LOGO_URL, PLAYSTORE_URL, APPSTORE_URL } from "../utils/constants";

const Footer = () => {
  return (
    <footer className="footer-section w-full">
      {/* 1. App Download Banner */}
      <div className="banner-section bg-[#f0f0f5] py-7 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xl md:text-2xl font-extrabold text-gray-800 text-center md:text-left">
            For better experience, download the Swiggy app now
          </p>
          <div className="flex items-center space-x-5">
            <a href="https://play.google.com/store/apps/details?id=in.swiggy.android" target="_blank" rel="noreferrer">
              <img
                id="google-playstore"
                src={PLAYSTORE_URL}
                alt="Google Play Store"
                className="h-12 w-auto object-contain cursor-pointer hover:scale-105 transition-transform"
              />
            </a>
            <a href="https://apps.apple.com/in/app/swiggy-food-grocery-delivery/id989520189" target="_blank" rel="noreferrer">
              <img
                id="apple-store"
                src={APPSTORE_URL}
                alt="Apple App Store"
                className="h-12 w-auto object-contain cursor-pointer hover:scale-105 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Directory */}
      <div className="bg-[#02060c] text-white py-14 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
          {/* Column 1: Brand & Copyright */}
          <div className="copyright-section flex flex-col space-y-3">
            <div className="flex items-center space-x-2">
              <img
                src={LOGO_URL}
                alt="Swiggy Logo"
                className="w-8 h-8 object-contain brightness-0 invert"
              />
              <span className="font-extrabold text-2xl tracking-tight text-white">
                Swiggy
              </span>
            </div>
            <p className="text-gray-400 text-sm pt-1">
              © 2026 Swiggy Limited
            </p>
          </div>

          {/* Column 2: Company */}
          <nav className="footer-nav">
            <h3 className="font-bold text-base text-white mb-4 tracking-wide">
              Company
            </h3>
            <ul className="footer-nav-list space-y-3 text-sm text-gray-400">
              <li className="footer-nav-item hover:text-white cursor-pointer transition-colors">About Us</li>
              <li className="footer-nav-item hover:text-white cursor-pointer transition-colors">Team</li>
              <li className="footer-nav-item hover:text-white cursor-pointer transition-colors">Careers</li>
              <li className="footer-nav-item hover:text-white cursor-pointer transition-colors">Swiggy One</li>
              <li className="footer-nav-item hover:text-white cursor-pointer transition-colors">Swiggy Instamart</li>
            </ul>
          </nav>

          {/* Column 3: Contact Us & Legal */}
          <nav className="footer-nav flex flex-col space-y-6">
            <div>
              <h3 className="font-bold text-base text-white mb-4 tracking-wide">
                Contact Us
              </h3>
              <ul className="footer-nav-list space-y-3 text-sm text-gray-400">
                <li className="footer-nav-item hover:text-white cursor-pointer transition-colors">Help & Support</li>
                <li className="footer-nav-item hover:text-white cursor-pointer transition-colors">Partner with Us</li>
                <li className="footer-nav-item hover:text-white cursor-pointer transition-colors">Ride with us</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-base text-white mb-4 tracking-wide">
                Legal
              </h3>
              <ul className="footer-nav-list space-y-3 text-sm text-gray-400">
                <li className="footer-nav-item hover:text-white cursor-pointer transition-colors">Terms & Conditions</li>
                <li className="footer-nav-item hover:text-white cursor-pointer transition-colors">Cookie Policy</li>
                <li className="footer-nav-item hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
              </ul>
            </div>
          </nav>

          {/* Column 4: We deliver to */}
          <nav className="footer-nav">
            <h3 className="font-bold text-base text-white mb-4 tracking-wide">
              We deliver to:
            </h3>
            <ul className="footer-nav-list space-y-3 text-sm text-gray-400">
              <li className="footer-nav-item hover:text-white cursor-pointer transition-colors">Bangalore</li>
              <li className="footer-nav-item hover:text-white cursor-pointer transition-colors">Hyderabad</li>
              <li className="footer-nav-item hover:text-white cursor-pointer transition-colors">Mumbai</li>
              <li className="footer-nav-item hover:text-white cursor-pointer transition-colors">Delhi</li>
              <li className="footer-nav-item hover:text-white cursor-pointer transition-colors">Gurgaon</li>
              <li className="pt-2">
                <button className="border border-gray-600 rounded-lg px-3 py-1.5 text-xs text-gray-300 flex items-center space-x-2 hover:border-gray-400 transition-colors">
                  <span>685 cities</span>
                  <span className="text-[10px]">▾</span>
                </button>
              </li>
            </ul>
          </nav>

          {/* Column 5: Social Links */}
          <nav className="footer-nav">
            <h3 className="font-bold text-base text-white mb-4 tracking-wide">
              Social Links
            </h3>
            <ul className="footer-nav-list space-y-3 text-sm text-gray-400">
              <li className="footer-nav-item flex items-center space-x-2 hover:text-white cursor-pointer transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
              </li>
              <li className="footer-nav-item flex items-center space-x-2 hover:text-white cursor-pointer transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>Twitter</span>
              </li>
              <li className="footer-nav-item flex items-center space-x-2 hover:text-white cursor-pointer transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Instagram</span>
              </li>
              <li className="footer-nav-item flex items-center space-x-2 hover:text-white cursor-pointer transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
                <span>Facebook</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
