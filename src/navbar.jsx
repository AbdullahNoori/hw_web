// import logo from "./src/assets/images"
// import logo from './assets/images'
import logo from "./assets/images/logo.png"; // Make sure the path is correct
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Form from "./form";

function Nav() {
  return (
    <div>
      <header className="bg-gradient-to-t from-stone-500 to-stone-400">
        <nav className="flex justify-between items-center w-[97%]">
          <div>
            <img
              src={logo}
              alt="404"
              className="w-36 mt-2 mb-1 rounded-xl ml-2   "
            />
            {/* <p>ARIANA</p> */}
          </div>
          <div>
            <ul className="flex items-center gap-[4vw] font-bold">
              <li>
                <a href="Home"> Home </a>
              </li>
              <li>
                <a href="Home">About Us</a>
              </li>
              <li>
                <a href="Home">Contact Us</a>
              </li>
              <li>
                <a href="#">Our History</a>
              </li>

              <li>
                <a href="">SignUp</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default Nav;
