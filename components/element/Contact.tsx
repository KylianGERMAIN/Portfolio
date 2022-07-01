/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next"


const Contact: NextPage = () => {

  return (
    <div className="h-screen flex items-center pt-20 justify-end">
      <div className="w-1/2 h-[500px] flex justify-end">
        <div className="w-3/4  bg-red-300">
          <h3>Get in touch with us!</h3>
          <p>Whether you want to learn about UX or need product design services let us help with your challenge.</p>
        </div>
      </div >
      <div className="w-1/2 ">
        <div className="w-3/4 h-[680px] shadow-2xl rounded-lg pt-10 ">
          <div className="pl-10 pr-20">
            <div className="flex justify-between">
              <input className="bg-white drop-shadow-xl h-[60px] rounded-lg placeholder:text-[#C4C4C4] pl-[14px] focus:outline-0" type="text" placeholder="Name" />
              <input className="bg-white drop-shadow-xl h-[60px] rounded-lg placeholder:text-[#C4C4C4] pl-[14px] focus:outline-0" type="text" placeholder="Phone number" />
            </div>
          </div>
          <div className="pt-10 pr-32 pl-10">
            <input className="bg-white drop-shadow-xl h-[60px] w-full rounded-lg placeholder:text-[#C4C4C4] pl-[14px] focus:outline-0" type="text" placeholder="Email address" />
          </div>
          <div className="pt-10 pl-10">
            <input className="bg-white drop-shadow-xl h-[60px] rounded-lg placeholder:text-[#C4C4C4] pl-[14px] focus:outline-0" type="text" placeholder="Subject" />
          </div>
          <div className="pt-10 pr-20 pl-10">
            <textarea className="w-full drop-shadow-xl resize-none rounded-lg placeholder:text-[#C4C4C4] pl-[14px] pt-[14px] focus:outline-0" id="story" name="story" placeholder="Subject" >
            </textarea>
          </div>
          <div className="p-10">
            <button className="transition drop-shadow-xl duration-500 hover:bg-[#ff384b] bg-[#FF4C60] font-bold text-white p-1 px-6 text-xl rounded-xl">Submit</button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Contact
