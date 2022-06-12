/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next"
import Image from 'next/image'


const BannerDownload: NextPage = () => {
  return (
    <div className="h-screen">
      <div className="flex lg:h-screen justify-center py-40 md:gap-20 xl:gap-52">
        <div className=' flex flex-col justify-center items-center '>
          <div className="pl-5 lg:p-0">
            <p className="text-4xl md:text-5xl text-left font-bold pb-5">Hello, I&lsquo;m</p>
            <p className="text-4xl md:text-5xl text-left font-bold pb-5">Kylian Germain</p>
            <p className="text-3xl md:text-5xl text-left font-bold text-[#FF4C60] pb-5">Full Stack Developer</p>
            <a href="EPITECH_GERMAIN_Kylian_CV.pdf" download="EPITECH_GERMAIN_Kylian_CV">
              <button className="transition duration-500 hover:bg-[#ff384b] bg-[#FF4C60] font-bold text-white p-1 px-6 text-3xl rounded-xl">Download</button>
            </a>
            <div className="flex items-center pt-12">
              <img
                src="/img/scroll.png"
                alt="Picture of the author"
                className="h-[60px]"
              />
              <p className="text-sm">Scroll Down</p>
            </div>
          </div>
        </div>
        <div className='hidden lg:flex justify-center items-center'>
          <img
            src="/img/boy.png"
            alt="Picture of boy"
            className="h-[500px]  max-w-md "
          />
        </div>
      </div>
    </div>
  )
}

export default BannerDownload
