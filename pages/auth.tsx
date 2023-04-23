import { useCallback, useState } from "react";
import Input from "../components/Input";



const Auth = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const [variant, setVariant] = useState('login');
    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
    }, []);

    return (
        <div className="relative h-full w-full">
            <div className="w-full h-full bg-black lg:bg-opacity-50">
                <nav className="px-12 py-5 bg-red-600">

                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 self-center px-14 py-16 mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {variant === 'login' ? 'Sign In' : 'Register'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant === 'register' && (
                                <Input 
                                    id="username"
                                    onChange={(e: any) => { setUsername(e.target.value) }}
                                    label="Username"
                                    value={username}
                                />
                            )}
                            <Input 
                                id="email"
                                onChange={(e: any) => { setEmail(e.target.value) }}
                                label="Email address"
                                type="email"
                                value={email}
                            />
                            <Input 
                                id="password"
                                onChange={(e: any) => { setPassword(e.target.value) }}
                                value={password}
                                label="Password"
                                type="password"
                            />
                            <button className="bg-red-600 rounded-md text-white w-full py-3 mt-10 hover:bg-red-700 transition">
                                Login
                            </button>
                            (<p className="text-neutral-500 mt-12">
                                {variant === 'login' ? 'First time using RealShare?' : 'Already have an account?'} <span onClick={toggleVariant} className="text-white hover:underline hover:cursor-pointer">
                                    {variant === 'login' ? 'Create an account' : 'Sign in'}
                                </span>
                            </p>)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;