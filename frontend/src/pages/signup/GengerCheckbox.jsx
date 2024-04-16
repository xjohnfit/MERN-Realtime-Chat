import React from 'react'

const GengerCheckbox = () => {
  return (
    <div className='flex mt-2'>
      <div className='form-control'>
        <label className={` label gap-2 cursor-pointer`} htmlFor="">
            <span className='label-text text-blue-500'>Male</span>
            <input type="checkbox" className='checkbox border-white' name="" id="" />
        </label>
      </div>
      <div className='form-control'>
        <label className={` label gap-2 cursor-pointer`} htmlFor="">
            <span className='label-text text-blue-500'>Female</span>
            <input type="checkbox" className='checkbox border-white' name="" id="" />
        </label>
      </div>
    </div>
  )
}

export default GengerCheckbox
