import Link from "next/link";
import Image from "next/image";
import "../style/style.css"

export default function NavBar() {
    return (
        <nav className="nav">
            <div className="logo">
                <Image src="/logo.png" alt="Logo" width={85} height={60}/>
                <span>GIAIC</span>
            </div>
            <ul className="nav-links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">Latest</Link></li>
                <li><Link href="/">Category</Link></li>
                <li><Link href="/">About</Link></li>
                <li><Link href="/">Contact</Link></li>
                <li><Link href="/">Feedback</Link></li>
            </ul>
        </nav>
    );
}