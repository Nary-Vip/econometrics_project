import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Restaurant = () => {
    const navigate = useNavigate();
    const [msg, setmsg] = useState("Write your review and submit");

    return (
        <div className='bg-gray-100'>
            <form name='reviewForm'>
                <div className="w-full text-center">
                    <h1 className='py-5 font-sans text-2xl shadow-md shadow-red-200'><span className="navName">NNB</span> Restaurents</h1>
                </div>
                <h3 className='py-10 text-3xl font-pacifo'>Your Feedback</h3>
                <div className='flex justify-center gap-20 px-40'>
                    <div className='block'>
                        <textarea className='px-5 py-5 border-2 border-gray-400 rounded-lg shadow-lg' id="reviewBox" name="reviewBox" rows="5" cols="50">
                        </textarea>
                    </div>
                </div>

                <div className="flex justify-center gap-10 py-5">
                    <div className="form-check form-check-inline">
                        <input className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none" type="radio" name="inlineRadioOptions" id="NB" value="option1" />
                        <label className="inline-block text-gray-800 form-check-label" htmlFor="NB">Multinomial NB</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-full appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none" type="radio" name="inlineRadioOptions" id="logisticRegression" value="option2" />
                        <label className="inline-block text-gray-800 form-check-label" htmlFor="logisticRegression">Logistic Regression</label>
                    </div>
                </div>

                <button onClick={(e) => {
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
                        
                        if(document.getElementById("NB").checked === true){
                            model = "1";
                            const data = {textData, model}
                            navigate("/result", { state: data });
                        }
                        
                        if(document.getElementById("logisticRegression").checked === true){
                            model = "2";
                            const data = {textData, model}
                            navigate("/result", { state: data });
                        }
                        else{
                            setmsg("Choose any model and submit");
                        setTimeout(() => {
                            setmsg("Write your review and submit");
                        }, 3000);
                        }
                        
                        
                    }
                }} className='p-5 my-10 text-white bg-red-500 rounded-lg shadow-xl hover:bg-red-600' type='submit'>SUBMIT</button>

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
    )
}

export default Restaurant
