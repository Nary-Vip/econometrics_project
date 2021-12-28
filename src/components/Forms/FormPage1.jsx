import React from 'react'

const FormPage1 = (props) => {
    const { formData, setFormData} = props;
    
    return (
        <div>
            <div className="flex flex-wrap -m-2">
                <div className="w-1/2 p-2">
                    <div className="relative">
                        <label htmlFor="name" className="text-sm leading-7 text-gray-600">Name</label>
                        
                        <input type="text" id="name" value={formData.name}
                        onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                        }}                         
                        name="name" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-opacity-50 border border-gray-400 rounded outline-none bg-gray-50 focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-300" />
                   
                    </div>
                </div>
                <div className="w-1/2 p-2">
                    <div className="relative">
                        <label htmlFor="gender" className="text-sm leading-7 text-gray-600s">Gender</label>
                        <select name="gender" value={formData.Gender}
                        onChange={(e) => {
                            setFormData({ ...formData, Gender: e.target.value });
                        }}   
                        className='w-full px-3 py-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-400 rounded outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-300' id="gender">
                            <option value="">Choose an option below</option>
                            <option value="1">Male</option>
                            <option value="0">Female</option>
                        </select>
                    </div>
                </div>
                
               
            </div>
        </div>
    )
}

export default FormPage1
