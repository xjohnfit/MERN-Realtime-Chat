import React from 'react'

const GengerCheckbox = ({ onCheckboxChange, selectedGender}) => {
  return (
    <div className='flex mt-2'>
      <div className='form-control'>
        <label className={` label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""} `} htmlFor="">
            <span className='label-text text-blue-500'>Male</span>
            <input type="checkbox" className='checkbox border-white' name="" id="" checked={selectedGender === "male"} onChange={() => onCheckboxChange("male")}/>
        </label>
      </div>
      <div className='form-control'>
        <label className={` label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""} `} htmlFor="">
            <span className='label-text text-blue-500'>Female</span>
            <input type="checkbox" className='checkbox border-white' name="" id="" checked={selectedGender === "female"} onChange={() => onCheckboxChange("female")} />
        </label>
      </div>
    </div>
  )
}

export default GengerCheckbox
