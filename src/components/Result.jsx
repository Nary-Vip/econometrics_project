import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
// import FeedbackGif from './FeedbackGif';
// import Loading from './Loading';
import axios from 'axios';

// import Loading from './Loading';

const Result = () => {
    const [resultt, setresultt] = useState("Loading");
    const fetchAnswer = axios.create();
    const data = useLocation();

    //States
    // const [isloading, setisloading] = useState(false);

    const onSubmit = async () => {
        console.log(data.state);
        // setisloading(true);
        const resultDiv = document.getElementById("result");
        const result = await fetchAnswer.post("http://localhost:5600/loanPrediction", 
        {
            creditHistory: data.state.creditHistory,
            Education: data.state.Education,
            Gender: data.state.Gender,
            Income: data.state.Income,
            PropertyArea: data.state.PropertyArea
        });
        console.log(result);
        setresultt(result.data.message);
        resultDiv.innerHTML = resultt;       
    }

    useEffect(() => {
        onSubmit();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <div className='grid h-screen bg-gray-100 gifcont place-items-center'>
                <div id="result"></div>
                <div className="p-10 border-2 border-gray-200">
                    {resultt === "Loading"?(
                        <div>
                            Loading...
                        </div>
                    ):(resultt === 1?(
                        <div className="text-green-400 shadow-md">
                            Congrats, Your Application is Approved    
                        </div>
                    ):(
                        <div className="text-red-500 shadow-sm">
                            Sorry, Your application is not approved.
                        </div>
                    )
                    )
                    }
                </div>
{/* 
                
                {((isloading) ? (
                    <Loading />
                ) : (

                    (feedbackgif) === "1" ? (
                        <FeedbackGif res="positive" />
                    ) : ((feedbackgif) === "2" ? (
                        <FeedbackGif res="negative" />
                    ) : (
                        <FeedbackGif res="server" />
                    )
                    )
                ))
                } */}
            </div>
        </div>
    )
}

export default Result
