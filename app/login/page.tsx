import { redirect } from "next/navigation";
import { getUser } from "../admin/actions";
import { login } from "./actions"

const Login = async () => {
    const user = await getUser();
    if(user) return redirect('/admin')

    return (
        <div className="h-screen bg-black justify-center flex">
        <form className='flex flex-col self-center space-y-5 text-gray-400 w-fit'>
            <label
            htmlFor="email"
            className="relative block pt-3 overflow-hidden bg-transparent border-b border-gray-200 focus-within:border-cp0-600"
            >
            <input
                type="email"
                name="email"
                id="email"
                maxLength={50}
                required
                className="w-full h-8 p-0 placeholder-transparent bg-transparent border-none peer focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />
            <span
                className="absolute text-sm transition-all -translate-y-1/2 start-0 top-2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-sm"
            >
                Email
            </span>
            </label>
            <label
            htmlFor="password"
            className="relative block pt-3 overflow-hidden bg-transparent border-b border-gray-200 focus-within:border-cp0-600"
            >
            <input
                type="password"
                name="password"
                id="password"
                maxLength={50}
                required
                className="w-full h-8 p-0 placeholder-transparent bg-transparent border-none peer focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />
            <span
                className="absolute text-sm transition-all -translate-y-1/2 start-0 top-2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-sm"
            >
                Password
            </span>
        </label>
        <button className='p-2 font-medium text-black rounded-sm bg-cp0-600' formAction={login}>Zaloguj</button>
        </form>
        </div>
    )
}

export default Login