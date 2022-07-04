import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { AiFillHome } from 'react-icons/ai';
import { IoIosMan, IoMdSchool } from 'react-icons/io';
import { BsBriefcaseFill } from 'react-icons/bs';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrFormClose } from 'react-icons/gr';

interface Props {
}

const navigation = [
  { name: 'Home', href: '#Home', icon: <AiFillHome size={20} />, style: 'text-[#FF4C60]' },
  { name: 'About me', href: '#About_me', icon: <IoIosMan size={20} />, style: 'color-black' },
  { name: 'My project', href: '#My_project', icon: <BsBriefcaseFill size={20} />, style: 'color-black' },
  { name: 'Career path', href: '#Career_Path', icon: <IoMdSchool size={20} />, style: 'color-black' },
  { name: 'Contact', href: '#Contact', icon: <RiContactsBook2Fill size={20} />, style: 'color-black' },
]

const Header = ({ }: Props) => {

  return (
    <Popover>
      <nav className='p-5 fixed w-full bg-[#FFFAFA] z-50'>
        <div className='flex justify-start justify-between  place-items-center lg:hidden w-full mr-8'>
          <div className='w-1/4'>
            <p className='font-bold text-3xl text-[#282828]'>Kyger.</p>
          </div>
          <Popover.Button className='text-black rounded-lg'>
            <span className='sr-only'>Open main menu</span>
            <GiHamburgerMenu size={30} />
          </Popover.Button>
        </div>
        <div className='hidden lg:flex  justify-center   place-items-center space-x-32'>
          <div className=''>
            <h1 className='font-bold md:text-3xl text-[#282828]'>Kyger.</h1>
          </div>
          <div className='space-x-10 flex'>
            {navigation.map((item, i) => (
              <a className='flex items-center  ' href={item.href} key={i}>
                <div className={`lg:pr-8 ${item.style}`}>{item.icon}</div>
                <p className={`text-sm  lg:text-base ${item.style}`}>{item.name}</p>
              </a>
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
          className='h-full w-full bg-[#FFFAFA] absolute z-10 top-0 inset-x-0 transition transform origin-top-right lg:hidden shadow-md'
          focus
        >
          <div className='p-8 bg-[#FFFAFA] overflow-hidden'>
            <div className='pt-4 flex items-center justify-between'>
              <div className='-mr-2'>
                <Popover.Button className=' rounded-md p-1 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100'>
                  <span className='sr-only'>Close menu</span>
                  <GrFormClose size={30} />
                </Popover.Button>
              </div>
            </div>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item) => (
                <a
                  className='block px-3 py-2 rounded-md text-lg font-medium text-[#282828] active:text-black hover:bg-gray-50'
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
