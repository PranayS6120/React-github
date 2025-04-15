import { Card, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import {
  Check,
  GitCommit,
  GitBranch,
  MessageCircle,
  Bot,
  Users,
} from 'lucide-react'

function Conversation() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 p-6 bg-gray-50 min-h-screen'>
      {/* Main conversation thread */}
      <div className='lg:col-span-3 space-y-4'>
        <Card>
          <CardContent className='p-4 flex gap-3 items-start'>
            <img
              src='https://avatars.githubusercontent.com/u/1?v=4'
              alt='user avatar'
              className='w-8 h-8 rounded-full'
            />
            <div>
              <div className='text-sm font-semibold'>
                YordanIliev2002{' '}
                <span className='text-xs text-gray-500'>
                  commented last month
                </span>
              </div>
              <p className='text-sm mt-1'>There was a typo</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className='p-4 flex gap-3 items-start'>
            <Bot className='w-6 h-6 mt-1 text-gray-500' />
            <div>
              <div className='text-sm font-semibold text-gray-700'>
                vercel{' '}
                <span className='text-xs text-gray-500'>
                  bot commented last month
                </span>
              </div>
              <p className='text-sm mt-1'>
                <strong>@YordanIliev2002</strong> is attempting to deploy a
                commit to the <strong>shadcn-pro</strong> Team on{' '}
                <a href='#' className='text-blue-600 underline'>
                  Vercel
                </a>
                . A member of the Team first needs to{' '}
                <a href='#' className='text-blue-600 underline'>
                  authorize it
                </a>
                .
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className='p-4 space-y-2'>
            <div className='flex items-center gap-2 text-sm'>
              <GitCommit className='w-4 h-4' /> YordanIliev2002 changed the
              title <s>Fix css selector for Zinc theme in website</s> ➝{' '}
              <strong>docs: typo in CSS selector</strong>
            </div>
            <div className='flex items-center gap-2 text-sm'>
              <GitCommit className='w-4 h-4' /> YordanIliev2002: docs: fix typo
              in CSS selector
            </div>
            <div className='flex items-center gap-2 text-sm'>
              <GitBranch className='w-4 h-4' /> force-pushed the{' '}
              <Badge>main</Badge> branch from <code>26c1149</code> to{' '}
              <code>5a72857</code>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sidebar */}
      <div className='space-y-4'>
        <Card>
          <CardContent className='p-4 space-y-2'>
            <h4 className='font-semibold text-sm mb-2'>Reviewers</h4>
            <div className='flex items-center justify-between text-sm'>
              <span>shadcn</span> <Check className='w-4 h-4 text-green-600' />
            </div>
            <div className='flex items-center justify-between text-sm'>
              <span>Jacksonmills</span>{' '}
              <Check className='w-4 h-4 text-green-600' />
            </div>
            <div className='flex items-center justify-between text-sm'>
              <span>matevegh</span> <Check className='w-4 h-4 text-green-600' />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className='p-4 space-y-2'>
            <h4 className='font-semibold text-sm mb-2'>Labels</h4>
            <Badge variant='default'>automerge</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardContent className='p-4 space-y-2 text-sm'>
            <div>
              <strong>Projects</strong>: None yet
            </div>
            <div>
              <strong>Milestone</strong>: No milestone
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Conversation
