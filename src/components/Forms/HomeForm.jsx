import React, { useState } from 'react'
import FormPage1 from "./FormPage1";
import FormPage2 from "./FormPage2";
import FormPage3 from "./FormPage3";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import FormPage4 from './FormPage4';

const HomeForm = (props) => {
    
    const { setmsg } = props;
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        name:"",
        creditHistory: "",
        Education: "",
        Income:"",
        Gender: "",
        PropertyArea: "",
        Model: ""
    });

    const FormTitles = ["Personal", "Background", "Banking", "Choose The Model"];

    const PageDisplay = () => {
        if (page === 0) {
            return <FormPage1 formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
            return <FormPage2 formData={formData} setFormData={setFormData} />;
        } else if (page === 2) {
            return <FormPage3 formData={formData} setFormData={setFormData} />;
        }
        else {
            return <FormPage4 formData={formData} setFormData={setFormData} />;
        }
    };

    return (
        <div>
            <div className="form">
                <div className="progressbar">
                    <div
                        style={{ width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%" }}>
                    </div>
                </div>
                <div className="form-container">
                    <div className="header">
                        <h1 className="my-2 text-xl">{FormTitles[page]}</h1>
                    </div>
                    <div className="body">{PageDisplay()}</div>
                    <div className=""></div>
                    <div className="my-5">
                        <button className="px-5 py-2 m-2 text-white bg-gray-500 rounded-lg shadow-xl hover:bg-gray-600"
                            disabled={page === 0}
                            onClick={(e) => {
                                e.preventDefault();
                                setPage((currPage) => currPage - 1);
                            }}
                        >
                            <AiOutlineArrowLeft className="inline-block m-1"/> Prev
                        </button>

                        <button className="px-5 py-2 m-2 text-white bg-green-500 rounded-lg shadow-xl hover:bg-green-600"
                            onClick={(e) => {
                                e.preventDefault();
                                if (page === FormTitles.length - 1) {
                                        e.preventDefault();
                                        if(formData.name === "" || formData.Education === "" || formData.Gender === "" || formData.Income === "" || formData.creditHistory === "" || formData.PropertyArea === "" || formData.Model === "" ){
                                            console.log(formData)
                                            setmsg("Please enter all the required details.");
                                            setTimeout(() => {
                                                setmsg("Fill the details and submit.");
                                            }, 3000);
                                        }

                                        else{
                                            navigate("/result", { state: formData });
                                        }
                                            
    
                                            
                                        
                                } else {
                                    setPage((currPage) => currPage + 1);
                                }
                            }}
                        >
                            {page === FormTitles.length - 1 ? "Submit" : "Next"}<AiOutlineArrowRight className="inline-block m-1"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeForm
