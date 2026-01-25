import Banner from '../assets/banner1.jpg'
import BookImgage from '../assets/book.png'
import CODW from '../assets/cod-which-do-you-prefer-to-play-normal-multiplayer-or-v0-5kc0toi9o4bd1.webp'
import Book2 from '../assets/photo-1597167100957-1dfa110c1c14 (1).jfif'

const HomeBoxImage = () => {
  return (
    <div className='flex flex-col sm:flex-row p-1 gap-3'>
        <div className='relative -z-10 h-56 w-96 sm:w-full md:w-full sm:h-full bg-gray-200 rounded-lg shadow-lg'>
          <img className='rounded-lg h-full w-full' src={CODW} alt={Banner} />
          {/* <p className='absolute bottom-0 z-10 text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit alias perferendis nulla, molestias corrupti officia voluptates ullam quasi! Similique harum, veritatis magni eveniet explicabo odit iusto iure, quasi temporibus exercitationem voluptatibus magnam repudiandae ipsa quam maiores, provident quaerat quo qui nostrum nulla veniam facilis! Laboriosam illum eos sit eius natus.</p> */}
        </div>
        <div className='flex flex-col gap-6 w-96'>
            <div className='bg-gray-200 h-48 sm:h-72 rounded-lg shadow-lg'>
              <img className='rounded-lg w-full h-full' src={Banner} alt="" />
            </div>
            <div className='flex gap-2'>
                <div className='bg-gray-200 h-40 w-48 rounded-lg shadow-lg'>
                  <img className='rounded-lg h-full' src={BookImgage} alt="" />
                </div>
                <div className='bg-gray-200 h-40 w-48 rounded-lg shadow-lg'>
                  <img className='rounded-lg h-full' src={Book2} alt="" />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default HomeBoxImage
