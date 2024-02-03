import Popup from "../components/PageAccessories/Popup"
import { useState } from 'react';
import { Link } from "react-router-dom";

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [showEmailPopup, setEmailShowPopup] = useState(false);
    const [showPasswordPopup, setshowPasswordPopup] = useState(false);
    const [showTermsPopup, setShowTermsPopup] = useState(false);
    const [terms, setTerms] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const validateEverything = () => {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(email) != true || email == '') {
            setEmailShowPopup(true);
            setTimeout(() => {
                setEmailShowPopup(false);
            }, 3000);
        }
        else {
            if (password !== confirmPassword || password == '' || confirmPassword == '') {
                setshowPasswordPopup(true);
                setTimeout(() => {
                    setshowPasswordPopup(false);
                }, 3000);
            }
            else {
                if (!terms) {
                    setShowTermsPopup(true);
                    setTimeout(() => {
                        setShowTermsPopup(false);
                    }, 3000);
                }
                else {

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
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                                <input type="email" value={email}
                                    onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder="name@company.com" required="true" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium  text-white">Password</label>
                                <input type="password" value={password}
                                    onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder="••••••••" required="true" />
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
                                Already have an account? <Link to={"/"} className="font-bold text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {showEmailPopup && <Popup alertTitle="Invalid Email ID" alertText="Please check if the email ID you typed is valid." />}
            {showPasswordPopup && <Popup alertTitle="Password Mismatch" alertText="Please check if you have typed different password while confirming it or you have missed typing it." />}
            {showTermsPopup && <Popup alertTitle="Terms and Conditions not agreed" alertText="Please accept the Terms and Conditions by clicking on the box." />}
        </section>
    )
}

export default SignupPage
