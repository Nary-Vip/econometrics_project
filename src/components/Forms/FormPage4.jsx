import React from 'react'

const FormPage4 = (props) => {
    const { formData, setFormData } = props;
    return (
        <div>
            <div className="flex flex-wrap justify-center -m-2">
                <div className="p-2">
                    <div className="relative">


                        <label htmlFor="Graduated" className="text-sm leading-7 text-gray-600">Available Models</label>
                        <select name="Graduated" value={formData.Model}
                            onChange={(e) => {
                                setFormData({ ...formData, Model: e.target.value });
                            }}

                            className='w-full px-3 py-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-400 rounded outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-300' id="Graduated">
                            <option value="">Choose an option below</option>
                            <option value="1">Logistic Regression</option>
                            <option value="2">Decision Tree</option>
                            <option value="3">Random Forest</option>
                            
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormPage4
