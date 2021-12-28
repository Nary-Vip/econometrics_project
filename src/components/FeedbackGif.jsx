import React from 'react'
import positiveGif from "../Images/positive.gif";
import negativeGif from "../Images/negative.gif";
import serverDown from "../Images/server-dead.gif";

const FeedbackGif = (props) => {
    const { res } = props;
    return (
        <>
            {(res)==="positive"?(
            <div className='grid place-items-center'>
                <img className="w-full h-5/6" src={positiveGif} alt="loading" />
            </div>
            ):((res)==="negative")?(
                <div className='grid place-items-center'>
                <img className="w-full h-full" src={negativeGif} alt="loading" />
            </div> 
            ):(
                <div className='grid place-items-center'>
                    <img className="w-full h-5/6" src={serverDown} alt="loading" />
                </div> 
            )}
        </>
    )
}

export default FeedbackGif
