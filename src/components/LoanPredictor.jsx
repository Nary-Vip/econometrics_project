import React, { useState } from 'react'
import HomeForm from './Forms/HomeForm';
import { Link } from "react-router-dom";

const LoanPredictor = () => {

    const [msg, setmsg] = useState("Fill the details and submit.");


    return (
        <div>
            <div className='bg-gray-100'>
                <form name='reviewForm'>
                    <div className="w-full text-center">
                        <h1 className='py-5 font-sans text-2xl shadow-md shadow-red-200'><span className="navName">NNB</span> Banking</h1>
                    </div>
                    <section className="relative">
                        <div className="py-5 mx-auto px-50">
                            <div className="flex flex-col w-full mb-6 text-center">
                                <h2 className="mb-4 text-xl font-medium text-gray-600 sm:text-3xl title-font">Check Your Loan Status</h2>
                                {/* <p className="mx-auto text-base leading-relaxed lg:w-2/3">Check your Loan Status.</p> */}
                            </div>
                            <div className="px-20 py-10 mx-auto border-2 border-gray-300 rounded-lg lg:w-3/6 md:w-2/3">
                                <HomeForm setmsg={setmsg}/>
                            </div>
                        </div>
                    </section>


{/* 
                    <div className="flex justify-center gap-10 py-5">
                        <div className="form-check form-check-inline">
                            <input className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none" type="radio" name="inlineRadioOptions" id="NB" value="option1" />
                            <label className="inline-block text-gray-800 form-check-label" htmlFor="NB">Multinomial NB</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none" type="radio" name="inlineRadioOptions" id="logisticRegression" value="option2" />
                            <label className="inline-block text-gray-800 form-check-label" htmlFor="logisticRegression">Logistic Regression</label>
                        </div>
                    </div> */}

                    {/* <button onClick={(e) => {
                        e.preventDefault();
                        const textData = document.getElementById("reviewBox").value;
                        let model;
                        if (textData === "") {
                            setmsg("Please drop a review before submitting");
                            setTimeout(() => {
                                setmsg("Write your review and submit");
                            }, 3000);
                        }
                        else {

                            if (document.getElementById("NB").checked === true) {
                                model = "1";
                                const data = { textData, model }
                                navigate("/result", { state: data });
                            }

                            if (document.getElementById("logisticRegression").checked === true) {
                                model = "2";
                                const data = { textData, model }
                                navigate("/result", { state: data });
                            }
                            else {
                                setmsg("Choose any model and submit");
                                setTimeout(() => {
                                    setmsg("Write your review and submit");
                                }, 3000);
                            }


                        }
                    }} className='p-5 text-white bg-red-500 rounded-lg shadow-xl hover:bg-red-600' type='submit'>SUBMIT</button> */}
                <div className="my-10">
                    <Link to="/about" className="px-5 py-3 text-white bg-green-400 rounded-md hover:bg-green-500">About US</Link>
                </div>
                </form>
                {/* Image design */}
                <div className="absolute left-0 block w-1/4 h-40 overflow-hidden bg-yellow-300 rounded-r-full bottom-40">
                </div>
                {/* Image design */}
                <div className="absolute right-0 block w-1/4 h-40 overflow-hidden bg-green-300 rounded-l-full top-40">
                </div>
                <div className='py-5 mt-5 border-2 border-dashed z-100'>
                    {msg}
                </div>
            </div>
        </div>
    )
}

export default LoanPredictor
