import { cookies } from "next/headers.js";
import Logout from "./Logout";


const Menu = async() => {
  const token = cookies().get("token")
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-white text-lg font-semibold">Brand</div>
          <ul className="flex space-x-6">
            <li>
              <a
                href="/"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                Home
              </a>
            </li>
            { token ? 
            <>
            <li>
              <a
                href="/dashboard"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/todos"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                Todos
              </a>
            </li>
            </>
            :
            <>
            <li>
              <a
                href="/signin"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                Signin
              </a>
            </li>
            <li>
              <a
                href="/signup"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                Signup
              </a>
            </li>
            </>
            }
            <li>
              <a
                href="/about"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                Contact Us
              </a>
            </li>
            { token && 
            <li>
              <Logout/>
            </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;