import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className='flex justify-center py-5 bg-blue-300'>
                <div className="flex-1">
                    <Link to="/" className='p-4'></Link>
                </div>
                <div className="flex-1">
                    <Link to="/" className='text-xl text-red-600 font-fuzzy'>NNB &#38; Co</Link>
                </div>
                <div className="flex-1">
                    <Link to="/loan" className='pr-5 text-gray-100 hover:text-white'>Loan Section</Link>
                    <Link to="/about" className='pl-5 text-gray-100 hover:text-white'>About</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
