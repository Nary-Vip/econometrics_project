import React from 'react'

const FormPage3 = (props) => {
    const { formData, setFormData} = props;


    return (
        <div>
            <div className="flex flex-wrap -m-2">
                <div className="w-1/2 p-2">
                    <div className="relative">
                        <label htmlFor="property" className="text-sm leading-7 text-gray-600">Property Area</label>
                        <select name="property" value={formData.PropertyArea}
                        onChange={(e) => {
                            setFormData({ ...formData, PropertyArea: e.target.value });
                        }} 
                        
                        className='w-full px-3 py-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-400 rounded outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-300' id="property">
                            <option value="">Choose an option below</option>
                            <option value="2">Urban</option>
                            <option value="1">Semi-Urban</option>
                            <option value="0">Rural</option>
                        </select>
                    </div>
                </div>

                <div className="w-1/2 p-2">
                    <div className="relative">
                        <label htmlFor="property" className="text-sm leading-7 text-gray-600">Can u Repay?</label>
                        <select name="property" value={formData.creditHistory}
                        onChange={(e) => {
                            setFormData({ ...formData, creditHistory: e.target.value });
                        }} 
                        
                        className='w-full px-3 py-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-400 rounded outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-300' id="repay">
                            <option value="">Choose an option below</option>
                            <option value="1">Sure</option>
                            <option value="0.5">Not sure</option>
                            <option value="0">I can't</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormPage3
