import React from 'react'
import { Link } from 'react-router-dom';
import cinemas from "../Images/cinemas.jpg";
import restaurent from "../Images/restaurent.jpg";
import LoanPic from "../Images/loan.jpg"
const Home = () => {
    return (
        <div className="bg-gray-100">
            <section className="text-gray-600 body-font">
                <div className="px-5 py-24 mx-auto">
                    <div className="flex flex-wrap justify-center -m-3">
                        <div className="p-4 md:w-1/3">
                            <div className="h-full overflow-hidden border-2 border-gray-300 rounded-lg border-opacity-60">
                                <img className="object-cover object-center w-full lg:h-48 md:h-36" src={cinemas} alt="blog" />
                                <div className="p-6">
                                    <h2 className="m-1 text-xs font-medium tracking-widest text-gray-400 title-font">CINEMAS</h2>
                                    <h1 className="m-3 text-lg font-medium text-gray-900 title-font">Customer's Sentiments</h1>
                                    <p className="m-3 leading-relaxed">We used MultiNomial Naives Bayes and Logistic Regression algorithm.</p>
                                    <div className="py-2 text-center">
                                        <Link to="cinemas" className="inline-flex items-center px-5 py-2 text-white rounded-lg bg-violet-500 hover:bg-violet-600 md:mb-2 lg:mb-0">Try It</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/3">
                            <div className="h-full overflow-hidden border-2 border-gray-300 rounded-lg border-opacity-60">
                                <img className="object-cover object-center w-full lg:h-48 md:h-36" src={LoanPic} alt="blog" />
                                <div className="p-6">
                                    <h2 className="m-1 text-xs font-medium tracking-widest text-gray-400 title-font">LOAN PREDICTIONS</h2>
                                    <h1 className="m-3 text-lg font-medium text-gray-900 title-font">Predict your status with your info.</h1>
                                    <p className="m-3 leading-relaxed">We used SVM and Logistic Regression algorithm to show the status.</p>
                                    <div className="py-2 text-center">
                                        <Link to="loan" className="inline-flex items-center px-5 py-2 text-white rounded-lg bg-violet-500 hover:bg-violet-600 md:mb-2 lg:mb-0">Try It</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div className="p-4 md:w-1/3">
                            <div className="h-full overflow-hidden border-2 border-gray-300 rounded-lg border-opacity-60">
                                <img className="object-cover object-center w-full lg:h-48 md:h-36" src={restaurent} alt="blog" />
                                <div className="p-6">
                                    <h2 className="m-1 text-xs font-medium tracking-widest text-gray-400 title-font">RESTAURANTS</h2>
                                    <h1 className="m-3 text-lg font-medium text-gray-900 title-font">Reviewer's Sentiments</h1>
                                    <p className="m-3 leading-relaxed">We used MultiNomial Naives Bayes and Logistic Regression algorithm.</p>
                                    <div className="py-2 text-center">
                                        <Link to="restaurent" className="inline-flex items-center px-5 py-2 text-white rounded-lg bg-violet-500 hover:bg-violet-600 md:mb-2 lg:mb-0">Try It</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
                <div>
                    <Link to="about" className="px-5 py-3 text-white bg-green-400 rounded-md hover:bg-green-500">About US</Link>
                </div>
            </section>
        </div>
    )
}

export default Home
