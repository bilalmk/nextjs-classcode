import Link from "next/link";

export default function Page() {
    return (
        <div>
            <ul>
                <li><Link href="/country/pakistan">Pakistan</Link></li>
                <li>India</li>
            </ul>
        </div>
    );
}