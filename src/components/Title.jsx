import React from 'react'

const Title = ({title}) => {
  return (
    <h1 className='text-[35px] font-bold mt-3 mb-6'>{title}</h1>
  )
}

export const SecondaryTitle = ({title}) => {
  return(<h2 className='text-[20px] font-bold my-3'></h2>)
}

export default Title

const Subtitle = ({subtitle}) => {
  return (
    <h2 className='text-lg text-[#797979] font-poppins'>{subtitle}</h2>
  )
}

export { Subtitle }