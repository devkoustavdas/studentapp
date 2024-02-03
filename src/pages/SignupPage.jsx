import Popup from "../components/PageAccessories/Popup"
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../data/firebase";

const SignupPage = (disabled) => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [popupMssge, setPopupMssge] = useState(['', '']);

    const [terms, setTerms] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const validateEverything = (e) => {
        e.preventDefault();
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
            if (password !== confirmPassword || password == '' || confirmPassword == '') {
                setPopupMssge(["Password Mismatch", "Please check if you have typed different password while confirming it or you have missed typing it."]);
                setShowPopup(true);
                setTimeout(() => {
                    setShowPopup(false);
                    setPopupMssge(['', '']);
                }, 2000);
            }
            else {
                if (!terms) {
                    setPopupMssge(["Terms and Conditions not agreed", "Please accept the Terms and Conditions by clicking on the box."]);
                    setShowPopup(true);
                    setTimeout(() => {
                        setShowPopup(false);
                        setPopupMssge(['', '']);
                    }, 2000);
                }
                else {
                    if (name == '') {
                        setPopupMssge(["No name", "Please type your name."]);
                        setShowPopup(true);
                        setTimeout(() => {
                            setShowPopup(false);
                            setPopupMssge(['', '']);
                        }, 2000);
                    }
                    else {
                        if (password.length < 6) {
                            setPopupMssge(["Password Short", "Passwords should be atleast 6 characters long."]);
                            setShowPopup(true);
                            setTimeout(() => {
                                setShowPopup(false);
                                setPopupMssge(['', '']);
                            }, 2000);
                        }
                        else {
                            createUserWithEmailAndPassword(auth, email, password)
                                .then(async(res) => {
                                    console.log(res);
                                    setPopupMssge(["Account Registered", `Welcome ${name}. Email ID: ${email} registered successfully`]);
                                    setShowPopup(true);
                                    setTimeout(() => {
                                        setShowPopup(false);
                                        setPopupMssge(['', '']);
                                    }, 2000);
                                    const user = res.user;
                                    await updateProfile(user, {
                                        displayName: name,
                                    });
                                    navigate("/");
                                })
                                .catch((err) => {
                                    if (err.code === 'auth/email-already-in-use') {
                                        setPopupMssge(["Email Already In Use", "Please check if you have an account already signed in with this email ID."]);
                                        setShowPopup(true);
                                        setTimeout(() => {
                                            setShowPopup(false);
                                            setPopupMssge(['', '']);
                                        }, 2000);
                                    }
                                });
                        }
                    }
                }
            }
        }
    };

    return (
        <section>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-title font-bold leading-tight tracking-tight md:text-2xl text-white">
                            Create an account
                        </h1>
                        <div className="space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Your Name</label>
                                <input type="text" value={name}
                                    onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="Koustav Das" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                                <input type="email" value={email}
                                    onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium  text-white">Password</label>
                                <input type="password" value={password}
                                    onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder="••••••••" required />
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-white">Confirm password</label>
                                <input type="confirm-password" value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)} name="confirm-password" id="confirm-password" placeholder="••••••••" required="" />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" onClick={() => setTerms(!terms)} className="w-4 h-4 border  rounded focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <button
                                type="submit" onClick={validateEverything}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Sign up
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link to={"/login"} className="font-bold text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {showPopup && <Popup alertTitle={popupMssge[0]} alertText={popupMssge[1]} />}
        </section>
    )
}

export default SignupPage
