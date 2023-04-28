import { useCallback, useState } from "react";
import Input from "../components/Input";
import axios from "axios";
import Loader from "@/components/Loader";


const Auth = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const [loading, setLoading] = useState(false);

    // const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [variant, setVariant] = useState('login');
    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
    }, []);

    const register = useCallback(async () => {
        try {
            setLoading(true);
            await axios.post('/api/register', {
                name,
                email,
                password
            }).then(function(){
                toggleVariant();
            }).catch(function(error) {
                alert(error.response.data['error']);
            });
            setLoading(false);
        } catch (error) {
            alert(error);
            console.log(error);
            setLoading(false);
        }
    }, [email, name, password]);

    const login = useCallback(async () => {
        console.log("Login");
    }, []);

    return (
        <div className="relative h-full w-full">
            <div className="w-full h-full bg-black lg:bg-opacity-50">
                <nav className="px-12 py-5 bg-red-600">

                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 self-center px-16 py-16 mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {variant === 'login' ? 'Sign In' : 'Register'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant === 'register' && (
                                <Input 
                                    id="name"
                                    onChange={(e: any) => { setName(e.target.value) }}
                                    label="Name"
                                    value={name}
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
                            <button onClick={variant === 'login' ? login : register} className="bg-red-600 rounded-md text-white w-full py-3 mt-10 hover:bg-red-700 transition">
                                {loading ? <Loader /> : variant === 'login' ? 'Login' : 'Sign up'}
                            </button>
                            
                            <p className="text-neutral-500 mt-12">
                                {variant === 'login' ? 'New to RealShare? ' : 'Already have an account? '} 
                                <span onClick={toggleVariant} className="text-white hover:underline hover:cursor-pointer">
                                    {variant === 'login' ? 'Create an account' : 'Sign in'}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;