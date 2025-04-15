import { GoGitMerge, GoCopy } from 'react-icons/go'
import Conversation from './Conversation'



function Body() {
  return (
    <div className="max-w-5xl mx-auto p-6 font-sans">
      <div className='flex justify-between items-center'>
        <h2 className='text-[32px] text-[#1f2328]'>
          docs: fix typo is CSS selector{' '}
          <span className='text-gray-500 font-light'>#6928</span>
        </h2>
        <button className='bg-[#1f883d] text-white px-3 py-1 rounded-md text-[12px]'>
          New Issue
        </button>
      </div>
      <div className='flex items-center mb-4'>
        <span className='bg-purple-600 text-white text-sm font-medium mr-2 px-3 py-1 rounded-full flex items-center'>
          <GoGitMerge />
          Merged
        </span>
        <span className='text-sm text-[#59636e]'>
          <a href='/' className='font-semibold'>
            kodiakhq
          </a>{' '}
          merged 1 commit into
        </span>
        <span className='bg-[#ddf4ff] text-[#0969da] text-xs font-mono ml-2 px-2 py-0.5 rounded'>
          shadcn-ui:main
        </span>
        <span className='text-sm text-gray-600 ml-2'>from</span>
        <span className='bg-[#ddf4ff] text-[#0969da] text-xs font-mono ml-2 px-2 py-0.5 rounded'>
          YordanIliev2002:main
        </span>
        <span className='text-sm text-gray-600 ml-2 flex items-center'>
          <GoCopy />
          last month
        </span>
      </div>
      <Conversation/>
    </div>
  )
}

export default Body
