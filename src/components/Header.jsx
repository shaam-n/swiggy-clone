import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_15px_40px_-20px_rgba(40,44,63,0.15)]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left Side: Logo & Location */}
        <div className="flex items-center space-x-9">
          <div className="logo-container cursor-pointer transition-transform duration-200 hover:scale-105">
            <img
              src={LOGO_URL}
              id="company-logo"
              alt="Swiggy Logo"
              className="w-12 h-12 object-contain"
            />
          </div>

          <div className="location-btn flex items-center space-x-2.5 cursor-pointer group text-sm">
            <span className="others font-bold text-gray-800 border-b-2 border-gray-800 group-hover:text-swiggy group-hover:border-swiggy transition-colors">
              Other Locations
            </span>
            <span className="location text-gray-500 font-normal truncate max-w-[220px]">
              Bengaluru, Karnataka
            </span>
            <span className="dropdown-btn text-swiggy font-bold text-xs transition-transform duration-200 group-hover:translate-y-0.5">
              ▾
            </span>
          </div>
        </div>

        {/* Right Side: Nav Items */}
        <nav className="nav-items">
          <ul className="nav-list flex items-center space-x-10 text-[15px] font-medium text-gray-700">
            {/* Search */}
            <li className="nav-item flex items-center space-x-2.5 cursor-pointer hover:text-swiggy transition-colors">
              <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 1114 0z" />
              </svg>
              <span>Search</span>
            </li>

            {/* Offer */}
            <li className="nav-item flex items-center space-x-2.5 cursor-pointer hover:text-swiggy transition-colors relative">
              <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <span>Offer</span>
              <span className="text-[10px] font-bold text-swiggy bg-orange-50 border border-orange-200 px-1.5 py-0.5 rounded uppercase leading-none tracking-wider">
                NEW
              </span>
            </li>

            {/* Help */}
            <li className="nav-item flex items-center space-x-2.5 cursor-pointer hover:text-swiggy transition-colors">
              <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span>Help</span>
            </li>

            {/* Sign in */}
            <li className="nav-item flex items-center space-x-2.5 cursor-pointer hover:text-swiggy transition-colors">
              <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Sign in</span>
            </li>

            {/* Cart */}
            <li className="nav-item flex items-center space-x-2.5 cursor-pointer hover:text-swiggy transition-colors">
              <div className="relative flex items-center">
                <svg className="w-5 h-5 stroke-[2.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="ml-1.5 px-1.5 py-0.5 bg-green-600 text-white font-bold text-xs rounded-full leading-none">
                  0
                </span>
              </div>
              <span>Cart</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
