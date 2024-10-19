import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-gray-400 p-4">
        <div className="container mx-auto flex justify-between items-center" >
          
          <div>
            <h1>Master Blogs</h1>
          </div>
         <div className="flex gap-x-4" >
            <Link href="/"  >Home</Link>
            <Link href="/blogs" >Blogs</Link>
         </div>
        </div>
            </nav>
    );
}