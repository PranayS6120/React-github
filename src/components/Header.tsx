import { FaGithub, FaSearch } from 'react-icons/fa'

const menuItems = [
  'Product',
  'Solutions',
  'Resources',
  'Open Source',
  'Enterprise',
  'Pricing',
]

function Header() {
  return (
    <nav className='bg-[#24292f] text-white px-6 py-3 flex justify-between items-center text-sm'>
      {/* Left Side */}
      <div className='flex items-center space-x-6'>
        <FaGithub size={28} className='text-white' />
        {menuItems.map((item) => (
          <div key={item} className='relative group'>
            <button className='hover:underline'>{item}</button>
            <span className='ml-1'>▾</span>
          </div>
        ))}
      </div>

      {/* Right Side */}
      <div className='flex items-center space-x-4'>
        {/* Search Bar */}
        <div className='relative'>
          <input
            type='text'
            placeholder='Search or jump to...'
            className='bg-[#1c2128] text-white border border-gray-600 rounded px-3 pl-8 py-1 placeholder-gray-400 focus:outline-none'
          />
          <FaSearch className='absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs' />
        </div>

        {/* Sign In / Sign Up */}
        <button className='hover:underline'>Sign in</button>
        <button className='border border-gray-500 px-3 py-1 rounded hover:bg-gray-700'>
          Sign up
        </button>
      </div>
    </nav>
  )
}

export default Header
