import Popup from "../components/PageAccessories/Popup"
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../data/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [popupMssge, setPopupMssge] = useState(['', '']);
    const [password, setPassword] = useState('');

    const validateEverything = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(email) != true || email == '') {
            setPopupMssge(["Invalid Email ID", "Please check if the email ID you typed is valid."]);
            setShowPopup(true);
            setTimeout(() => {
                setShowPopup(false);
                setPopupMssge(['', '']);
            }, 2000);
        }
        else {
            if (password == '') {
                setPopupMssge(["Password Empty", "Please type your password."]);
                setShowPopup(true);
                setTimeout(() => {
                    setShowPopup(false);
                    setPopupMssge(['', '']);
                }, 2000);
            }
            else {
                signInWithEmailAndPassword(auth, email, password)
                    .then(async (res) => {
                        setPopupMssge(["Account Logged In", `Welcome. Email ID: ${email} logged in successfully`]);
                        setShowPopup(true);
                        setTimeout(() => {
                            setShowPopup(false);
                            setPopupMssge(['', '']);
                        }, 2000);
                        const user = res.user;
                        navigate("/");
                    })
                    .catch((err) => {
                            setPopupMssge(["Failed to login", "Please check if you have an account in this email ID or you typed the right password."]);
                            setShowPopup(true);
                            setTimeout(() => {
                                setShowPopup(false);
                                setPopupMssge(['', '']);
                            }, 2000);
                    });
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700 pb-7">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="font-title mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-300">
                        Login to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-400">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    autoComplete="email"
                                    placeholder="Type your Email ID"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-400" >
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Type your Password"
                                    autoComplete="current-password"
                                    required
                                />
                            </div>
                        </div>


                        <div>
                            <button
                                type="submit" onClick={validateEverything}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Sign in
                            </button>
                        </div>
                    </div>
                    <p className="mt-4 text-sm font-light text-gray-400">
                        Haven't created an account yet? <Link to={"/signup"} className="font-bold hover:underline">Signup here</Link>
                    </p>
                </div>
            </div>
            {showPopup && <Popup alertTitle={popupMssge[0]} alertText={popupMssge[1]} />}
        </div>
    )
}

export default LoginPage;
