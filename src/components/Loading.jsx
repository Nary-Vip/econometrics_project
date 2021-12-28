import React from 'react'
import loader_gif from "../Images/loading.gif";

const Loading = () => {
    return (
        <div className='grid place-items-center'>
            Loading
            <img className="w-5/6 h-4/6" src={loader_gif} alt="loading" />
        </div>
    )
}

export default Loading
