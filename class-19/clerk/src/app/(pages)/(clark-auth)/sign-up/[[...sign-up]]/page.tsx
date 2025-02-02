import { SignUp } from "@clerk/nextjs";

export default function Singup() {
    return (
        <div className="flex justify-center items-center h-screen m-auto">
            <SignUp/>
        </div>
    );
}