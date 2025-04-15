import { FaRegBell, FaCodeBranch, FaStar } from 'react-icons/fa'
import { GoIssueOpened } from 'react-icons/go'
import { AiOutlinePullRequest } from 'react-icons/ai'
import { TbLayoutDashboard } from 'react-icons/tb'
import { BsPlayCircle, BsShieldCheck } from 'react-icons/bs'
import { FiBarChart2 } from 'react-icons/fi'

function SubHeader() {
  return (
    <div className='bg-gray-50 border-b border-gray-200 px-6 py-3 '>
      <div className='flex flex-wrap items-center justify-between text-sm'>
        {/* Left Section */}
        <div className='flex items-center space-x-8'>
          {/* Repo Info */}
          <div className='flex items-center space-x-2 text-sm'>
            <span className='text-blue-600 font-medium cursor-pointer'>
              shadcn-ui
            </span>
            <span>/</span>
            <span className='font-semibold cursor-pointer'>ui</span>
            <span className='border px-1 py-0.5 text-xs rounded-full bg-gray-100 text-gray-500'>
              Public
            </span>
          </div>
        </div>

        {/* Right Buttons */}
        <div className='flex items-center space-x-2 mt-2 sm:mt-0'>
          <Button
            label='Sponsor'
            icon={<span className='text-pink-500'>♥</span>}
          />
          <Button label='Notifications' icon={<FaRegBell />} />
          <Button label='Fork' icon={<FaCodeBranch />} count='5.7k' />
          <Button label='Star' icon={<FaStar />} count='85.2k' />
        </div>
      </div>
      {/* Tabs */}
      <div className='flex space-x-4 text-gray-700'>
        <Tab icon={<FaCodeBranch />} label='Code' />
        <Tab icon={<GoIssueOpened />} label='Issues' count={912} />
        <Tab
          icon={<AiOutlinePullRequest />}
          label='Pull requests'
          count={814}
          bold
            
        />
        <Tab icon={<TbLayoutDashboard />} label='Discussions' />
        <Tab icon={<BsPlayCircle />} label='Actions' />
        <Tab icon={<BsShieldCheck />} label='Security' />
        <Tab icon={<FiBarChart2 />} label='Insights' />
      </div>
    </div>
  )
}

const Tab = ({
  icon,
  label,
  count,
  bold = false,
}: {
  icon: React.ReactNode
  label: string
  count?: number
  bold?: boolean
}) => (
  <div
    className={`flex items-center space-x-1 hover:underline cursor-pointer ${
      bold ? 'font-semibold' : ''
    }`}
  >
    {icon}
    <span>{label}</span>
    {count !== undefined && (
      <span className='bg-gray-100 px-1.5 rounded-full text-xs text-gray-700 font-medium'>
        {count}
      </span>
    )}
  </div>
)

const Button = ({
  label,
  icon,
  count,
}: {
  label: string
  icon: React.ReactNode
  count?: string
}) => (
  <button className='flex items-center space-x-1 border px-2.5 py-1 rounded bg-white hover:bg-gray-100'>
    {icon}
    <span>{label}</span>
    {count && <span className='text-gray-500'>{count}</span>}
  </button>
)

export default SubHeader
