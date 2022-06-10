import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { AiFillHome } from 'react-icons/ai';
import { IoIosMan, IoMdSchool } from 'react-icons/io';
import { BsBriefcaseFill } from 'react-icons/bs';
import { RiContactsBook2Fill } from 'react-icons/ri';

interface Props {
}

const navigation = [
  { name: 'Home', href: '/', icon: <AiFillHome /> },
  { name: 'About me', href: '/', icon: <IoIosMan /> },
  { name: 'My project', href: '/', icon: <BsBriefcaseFill /> },
  { name: 'Parcours', href: '/', icon: <IoMdSchool /> },
  { name: 'Contact', href: '/', icon: <RiContactsBook2Fill /> },
]

const Header = ({ }: Props) => {

  return (
    <Popover>
      <nav className='p-5 bg-red-100'>
        <div className='flex justify-start justify-between  place-items-center md:hidden w-full mr-8'>
          <div className='w-1/4'>
            <p>Kyger.</p>
          </div>
          <Popover.Button className='bg-[#7CA55E] text-white hover:bg-gray-700 rounded-lg'>
            <span className='sr-only'>Open main menu</span>
            <p>ccc</p>
          </Popover.Button>
        </div>
        <div className='hidden md:flex'>
          <div className='w-1/4'>
            <p>Kyger.</p>
          </div>
          <div className='w-3/4 space-x-10 flex'>
            {navigation.map((item, i) => (
              <div className='flex items-center' key={i}>
                {item.icon}
                <a className='text-black ' href={item.href}>
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        </div>

      </nav >
      < Transition
        as={Fragment}
        enter='duration-150 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          className='h-full w-full bg-white absolute z-10 top-0 inset-x-0 transition transform origin-top-right md:hidden shadow-md'
          focus
        >
          <div className='p-8 bg-white overflow-hidden'>
            <div className='pt-4 flex items-center justify-between'>
              <div className='-mr-2'>
                <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                  <span className='sr-only'>Close menu</span>
                  {/* <XIcon aria-hidden='true' className='h-6 w-6' /> */}
                </Popover.Button>
              </div>
            </div>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item) => (
                <a
                  className='block px-3 py-2 rounded-md text-lg font-medium text-[#7CA55E] active:text-black hover:bg-gray-50'
                  href={item.href}
                  key={item.name}
                >
                  {item.name}
                </a>
              ))}
              <div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition >
    </Popover >
  )
}

export default Header
