// File: PullRequest.tsx
import React from 'react'

type Reviewer = {
  name: string
  avatar: string
  approved: boolean
}

const reviewers: Reviewer[] = [
  { name: 'shadcn', avatar: 'https://github.com/shadcn.png', approved: true },
  {
    name: 'Jacksonmills',
    avatar: 'https://github.com/Jacksonmills.png',
    approved: true,
  },
  {
    name: 'matevegh',
    avatar: 'https://github.com/matevegh.png',
    approved: true,
  },
]

const PullRequest: React.FC = () => {
  return (
    <div className='max-w-5xl mx-auto p-6 font-sans'>
      <div className='mb-4'>
        <span className='text-gray-400'>docs: </span>
        <span className='text-2xl font-semibold'>fix typo in CSS selector</span>
        <span className='text-gray-500 text-lg ml-2'>#6928</span>
      </div>

      <div className='flex items-center mb-4'>
        <span className='bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-3 py-1 rounded-full'>
          Merged
        </span>
        <span className='text-sm text-gray-600'>
          kodiakhq merged 1 commit into
        </span>
        <span className='bg-gray-200 text-gray-800 text-xs font-mono ml-2 px-2 py-0.5 rounded'>
          shadcn-ui:main
        </span>
        <span className='text-sm text-gray-600 ml-2'>from</span>
        <span className='bg-gray-200 text-gray-800 text-xs font-mono ml-2 px-2 py-0.5 rounded'>
          YordanIliev2002:main
        </span>
        <span className='text-sm text-gray-600 ml-2'>last month</span>
      </div>

      <div className='border-t pt-4'>
        <div className='flex items-start space-x-4 mb-6'>
          <img
            className='w-10 h-10 rounded-full'
            src='https://github.com/YordanIliev2002.png'
            alt='User avatar'
          />
          <div>
            <p className='font-medium'>
              YordanIliev2002{' '}
              <span className='text-gray-500 text-sm'>
                commented last month
              </span>
            </p>
            <p>There was a typo</p>
          </div>
        </div>

        <div className='flex items-start space-x-4 mb-6'>
          <img
            className='w-10 h-10 rounded bg-black p-1'
            src='https://vercel.com/favicon.ico'
            alt='Vercel bot'
          />
          <div>
            <p className='font-medium'>
              vercel{' '}
              <span className='text-gray-500 text-sm'>
                commented last month
              </span>
            </p>
            <p>
              <span className='text-blue-600'>@YordanIliev2002</span> is
              attempting to deploy a commit to the <strong>shadcn-pro</strong>{' '}
              Team on{' '}
              <a href='https://vercel.com' className='text-blue-600 underline'>
                Vercel
              </a>
              .<br />A member of the Team first needs to{' '}
              <a href='#' className='text-blue-600 underline'>
                authorize it
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <div className='border-t pt-4'>
        <h3 className='text-lg font-semibold mb-2'>Reviewers</h3>
        <div className='flex space-x-6'>
          {reviewers.map((rev) => (
            <div key={rev.name} className='flex items-center space-x-2'>
              <img
                src={rev.avatar}
                alt={rev.name}
                className='w-8 h-8 rounded-full'
              />
              <span>{rev.name}</span>
              {rev.approved && <span className='text-green-600'>✔</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PullRequest
