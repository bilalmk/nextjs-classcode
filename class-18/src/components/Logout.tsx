'use client'

import { LogOutAction } from "@/actions/logoutAction";

 
export default function Logout() {
    return (
        <a
                onClick={()=>LogOutAction()}
                href="#"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                Logout
              </a>
    );
}