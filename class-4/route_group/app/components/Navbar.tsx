import Link from "next/link";

export default function Page() {
    return (
        <>
        <Link href="/">Home</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link href="/country">Country</Link>&nbsp;|&nbsp;&nbsp;
        <Link href="/login">Login</Link>&nbsp;|&nbsp;&nbsp;
        </>
    );
}