import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import greenTick from '../Images/green-tick.gif';
import reject from '../Images/reject.gif';
import loading from '../Images/loading.gif';
import axios from 'axios';

// import Loading from './Loading';

const Result = () => {
    const [resultt, setresultt] = useState("Loading");
    const fetchAnswer = axios.create(
        {
            baseUrl: "http://localhost:5600/"
        }
    );
    const data = useLocation();

    //States
    // const [isloading, setisloading] = useState(false);

    const onSubmit = async () => {
        console.log(data.state);
        // setisloading(true);
        const result = await fetchAnswer.post("http://localhost:5600/loanPrediction",
            {
                creditHistory: data.state.creditHistory,
                Education: data.state.Education,
                Gender: data.state.Gender,
                Income: data.state.Income,
                PropertyArea: data.state.PropertyArea,
                Model: data.state.Model
            });
        console.log(result);
        setresultt(result.data.message);
    }

    useEffect(() => {
        onSubmit();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <div className='grid h-full bg-gray-100 gifcont place-items-center'>
                <div className="w-full text-center">
                    <h1 className='py-5 font-sans text-2xl shadow-md shadow-red-200'><span className="navName">NNB</span> Banking</h1>
                </div>
                <div className="h-full p-10">
                    {resultt === "Loading" ? (
                        <div className="flex flex-col items-center justify-center">
                        <div className="flex flex-col items-center p-10 border-2 border-gray-200 rounded-md justify-content-center">
                            <div className="my-2 mb-10 text-pink-400 shadow-sm">
                                Our Machine Learning model is running!
                            </div>
                            <div>
                                <img  src={loading} className='rounded-lg' alt="Loading" />
                            </div>
                        </div>

                        <div className="p-3 my-10 text-2xl border-2 border-red-200 border-dashed rounded-lg text-sky-300">
                            Your Information is being processed, Please wait
                        </div>
                    </div>
                    ) : (resultt === "1" ? (
                        <div className="flex flex-col items-center justify-center">
                            <div className="flex flex-col items-center p-10 border-2 border-gray-200 rounded-md justify-content-center">
                                <div className="my-2 mb-10 text-green-500 shadow-sm">
                                    Congrats, Your application is approved.
                                </div>
                                <div className="w-2/6 h-2/6">
                                    <img  src={greenTick} className='rounded-lg' alt="Green Tick" />
                                </div>
                            </div>

                            <div className="p-3 my-10 text-2xl border-2 border-red-200 border-dashed rounded-lg pb-50 text-sky-300">
                                Please contact our manager Naresh Kumar for further details.
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center">
                            <div className="flex flex-col items-center p-10 border-2 border-gray-200 rounded-md justify-content-center">
                                <div className="my-2 mb-10 text-red-500 shadow-sm">
                                    Sorry, Your application is not approved.
                                </div>
                                <div>
                                    <img src={reject} alt="Reject" />
                                </div>
                            </div>

                            <div className="p-3 my-10 text-2xl border-2 border-red-200 border-dashed rounded-lg text-sky-300">
                                Please check back after meeting the minimum requirement
                            </div>
                        </div>
                    )
                    )
                    }
                </div>
            </div>
        </div>
    )
}

export default Result
