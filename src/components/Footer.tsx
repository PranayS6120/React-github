import { FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='w-full py-6 px-4 flex flex-wrap items-center justify-center text-sm text-gray-600 space-x-4 border-t'>
      <FaGithub className='text-xl' />

      <span>© 2025 GitHub, Inc.</span>

      {[
        'Terms',
        'Privacy',
        'Security',
        'Status',
        'Docs',
        'Contact',
        'Manage cookies',
        'Do not share my personal information',
      ].map((item, idx) => (
        <a key={idx} href='#' className='hover:underline whitespace-nowrap'>
          {item}
        </a>
      ))}
    </footer>
  )
}

export default Footer
