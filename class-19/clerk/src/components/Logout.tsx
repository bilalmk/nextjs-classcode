import { SignOutButton } from "@clerk/nextjs";

 
export default function Logout() {
    return (
      <SignOutButton>
        <button className="text-gray-300 hover:text-white transition duration-300">
          Logout
        </button>
      </SignOutButton>
    );
}