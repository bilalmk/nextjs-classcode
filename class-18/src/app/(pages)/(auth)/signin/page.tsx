'use client'
import handleSubmitForm from "@/actions/signinAction";
import { useFormState } from "react-dom";
export default function SignIn() {
    const [formState, formAction] = useFormState(handleSubmitForm,undefined)
    return (
        <div>
            <form action={formAction} className="max-w-sm mx-auto bg-white shadow-md rounded-lg p-6 space-y-4">
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Email</label>
                    <input
                    type="text"
                    name="email"
                    id="email"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email"
                    />
                    
                        
                        <div className="text-sm text-red-500 mt-1 hidden" id="emailError">error</div>
                    
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Password</label>
                    <input
                    type="password"
                    name="password"
                    id="password"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your password"
                    />
                    
                    <div className="text-sm text-red-500 mt-1 hidden" id="passwordError">error</div>
                    
                    
                </div>                
                <div>
                    <input
                    type="submit"
                    value="Login"
                    className="w-full bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600 cursor-pointer"
                    />
                </div>
            </form>
            <div className="text-sm text-red-500 mt-1 hidden" id="emailError">message here</div>
            {formState && <p>{formState}</p>}
        </div>
    );
}
