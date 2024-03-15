import { IoSearch } from "react-icons/io5";
import Profile from '../../assets/logo/Profile-indicator.png'

const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box"
            >
              <li className="text-[#150B2BB2] leading-5">
                <a>Home</a>
              </li>

              <li className="text-[#150B2BB2] leading-5">
                <a>Recipes</a>
              </li>

              <li className="text-[#150B2BB2] leading-5">
                <a>About</a>
              </li>

              <li className="text-[#150B2BB2] leading-5">
                <a>Search</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-[#150B2B] text-xl lg:text-3xl font-bold leading-10">
            Recipe Calories
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-[#150B2BB2] leading-5">
              <a>Home</a>
            </li>

            <li className="text-[#150B2BB2] leading-5">
              <a>Recipes</a>
            </li>

            <li className="text-[#150B2BB2] leading-5">
              <a>About</a>
            </li>

            <li className="text-[#150B2BB2] leading-5">
              <a>Search</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <label className="input input-bordered flex items-center gap-2 rounded-3xl border-none bg-[#150B2B0D]">
            <IoSearch />
            <input type="text" className="grow leading-5 text-[#150B2BB2] hidden lg:block" placeholder="Search" />
            
          </label>
          <div className="avatar p-3 ml-3 bg-[#0BE58A] rounded-full">
              <div className="w-6 rounded-full">
                <img  src={Profile} />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
