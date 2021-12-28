import React from 'react'

const FormPage2 = (props) => {
    const { formData, setFormData} = props;


    return (
        <div>
            <div className="flex flex-wrap -m-2">
                <div className="w-1/2 p-2">
                    <div className="relative">
                        <label htmlFor="income" className="text-sm leading-7 text-gray-600">Applicant Income(in thousands)</label>
                        <input type="text" id="income" value={formData.Income}
                        onChange={(e) => {
                            setFormData({ ...formData, Income: e.target.value });
                        }} 
                        
                        name="number" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-400 rounded outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-300" />
                    </div>
                </div>
                <div className="w-1/2 p-2">
                    <div className="relative">
                        <label htmlFor="Graduated" className="text-sm leading-7 text-gray-600">Education</label>
                        <select name="Graduated" value={formData.Education}
                        onChange={(e) => {
                            setFormData({ ...formData, Education: e.target.value });
                        }} 
                        
                        className='w-full px-3 py-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-400 rounded outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-300' id="Graduated">
                            <option value="">Choose an option below</option>
                            <option value="0">UnGraduated</option>
                            <option value="1">Graduated</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormPage2
