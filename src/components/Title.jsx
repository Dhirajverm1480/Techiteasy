const Title = ({title}) => {
  return (
    <h1 className='text-[35px] font-bold mt-3 mb-6'>{title}</h1>
  )
}

export default Title

const SecondaryTitle = ({title}) => {
  return(<h2 className='text-[20px] font-bold my-3'>{title}</h2>)
}

const Subtitle = ({subtitle}) => {
  return (
    <h2 className='text-lg text-[#797979] font-poppins'>{subtitle}</h2>
  )
}

export { Subtitle, SecondaryTitle }