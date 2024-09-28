import Link from "next/link";

export default function LI({href, name}:{href:string, name:string}) {
    return (
        <li><Link href={href}>{name}</Link></li>
    );
}