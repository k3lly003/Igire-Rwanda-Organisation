"use client"
import React from 'react'
import Select from 'react-select'
import countries from 'world-countries'
import { FaUser,FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const countryOptions = countries.map(country => ({
  value: country.cca2,
  label: country.name.common
}))

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: '#f3f4f6', 
    borderColor: '#d1d5db',
    padding: '0.20rem',
    borderRadius: '0.375rem', 
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#9ca3af', 
    }
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#f3f4f6' : '#fff', 
    color: state.isFocused ? 'black' : provided.color,
    padding: '0.75rem', 
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#f3f4f6', 
    borderRadius: '0.375rem', 
  })
}

const page = () => {
  return (
    <div className='py-14 '>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4">Apply for this job</h2>

        <form className="space-y-6 text-gray-700">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <input 
                type="text" 
                placeholder="First name" 
                className="w-full bg-gray-100"
              />
              <FaUser />
            </div>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <input 
                type="text" 
                placeholder="Last name" 
                className="w-full bg-gray-100 " 
              />
              <FaUser />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-gray-100" 
              />
              <MdEmail className='w-6 h-6' />
            </div>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <input 
                type="tel" 
                placeholder="Phone" 
                className="w-full bg-gray-100" 
              />
              <FaPhoneAlt />
            </div>
          </div>

          <div className=''>
            <Select 
              options={countryOptions} 
              placeholder="Select your country" 
              className="w-full" 
              styles={customStyles} 
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center border border-gray-300 rounded-md pl-3 ">
                <input 
                  type="text" 
                  placeholder="Upload CV" 
                  className="w-full border-none bg-transparent" 
                  disabled 
                />
                <input type="file" id="cvUpload" className="hidden" />
                <label htmlFor="cvUpload" className="bg-black text-white px-2 py-2 rounded-md cursor-pointer ml-2">
                  Browse
                </label>
              </div>
              <label className="block mt-1 text-gray-500 text-sm">(Only pdf)</label>
            </div>
            <div>
              <div className="flex items-center border border-gray-300 rounded-md pl-3 ">
                <input 
                  type="text" 
                  placeholder="Upload Cover Letter" 
                  className="w-full border-none bg-transparent" 
                  disabled 
                />
                <input type="file" id="coverUpload" className="hidden" />
                <label htmlFor="coverUpload" className="bg-black text-white px-2 py-2 rounded-md cursor-pointer ml-2">
                  Browse
                </label>
              </div>
              <label className="block mt-1 text-gray-500 text-sm">(Only pdf) </label>
            </div>
          </div>

          <div>
            <div className='py-4'><hr/></div>

            <input 
              type="url" 
              placeholder="LinkedIn profile" 
              className="w-full border border-gray-300 bg-gray-100 rounded-md px-3 py-2 focus:outline-none" 
            />
          </div>

          <div className="flex justify-end gap-4">
            <button type="reset" className="bg-gray-500 text-white px-6 py-2 rounded-md ">Reset</button>
            <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded-md">Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default page
