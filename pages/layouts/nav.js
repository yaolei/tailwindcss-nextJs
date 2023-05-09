import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Nav = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] px-4 mx-auto text-white'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React.</h1>
            <ul className='hidden md:flex'>
                <li className="p-4 border-gray-600">Home</li>
                <li className="p-4 border-gray-600">Company</li>
                <li className="p-4 border-gray-600">Resources</li>
                <li className="p-4 border-gray-600">About</li>
                <li className="p-4 border-gray-600">Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden cursor-pointer'>
                {!nav ? <AiOutlineClose size={20}/>: <AiOutlineMenu size={20}/>}
            </div>
            <div className={!nav? 'fixed left-0 top-0 w-[60%] h-24 border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500': 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React.</h1>
                <ul className='md:hidden p-4 uppercase '>
                    <li className="p-4 border-gray-600">Home</li>
                    <li className="p-4 border-gray-600">Company</li>
                    <li className="p-4 border-gray-600">Resources</li>
                    <li className="p-4 border-gray-600">About</li>
                    <li className="p-4 border-gray-600">Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Nav