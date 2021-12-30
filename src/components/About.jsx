import React from 'react'
import { GiPawHeart } from "react-icons/gi";
import aboutPic from "../Images/about.jpg";

const About = () => {
    return (
        <div className="bg-gray-200 p-10">

            <div className="flex flex-col p-10 border-2 border-dashed rounded-lg border-gray-300">
                <div className="text-4xl font-bold text-fuchsia-600">
                    ABOUT US <GiPawHeart className="inline-block" />
                </div>
                <div className="flex py-20 justify-center gap-20">
                    <div className="w-2/6 h-2/6">
                        <img src={aboutPic} alt="" className="rounded-lg" />
                    </div>
                    <div className="flex flex-col items-start">
                        <div className="text-2xl text-gray-600">
                            Loan Prediction
                        </div>
                        <div className="text-gray-400 my-2 text-justify">
                            <div className="my-2">NNB app is for the users to check their Loan Eligibility, <br />We used few Machine Learning Techniques to achieve this.<br /></div>
                            <div className="my-3">Machine Learning Techniques such as:
                                <ul className="ml-10 list-disc">
                                    <li>Logistic Regression</li>
                                    <li>Decision Tree</li>
                                    <li>Random Forest</li>
                                </ul>
                            </div>
                            <div className="my-2">
                                In addition, We used Web Technologies like React &#123;FrontEnd&#125; ,<br />
                                Tailwind CSS, HTML and JavaScript.
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
