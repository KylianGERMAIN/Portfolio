/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next"


const Contact: NextPage = () => {

  return (
    <div id="Contact" className=" md:flex  flex-row-reverse items-center pt-20 pb-40 justify-end p-10 space-y-10 md:space-y-0">
      <div className="lg:w-1/2 ">
        <div className="lg:w-3/4 shadow-2xl rounded-lg pt-10 ">
          <div className="pl-10 pr-20">
            <div className="grid xl:flex justify-between space-y-10 xl:space-y-0">
              <input className="bg-white drop-shadow-xl h-[60px] w-[200px] rounded-lg placeholder:text-[#C4C4C4] pl-[14px] focus:outline-0" type="text" placeholder="Name" />
              <input className="bg-white drop-shadow-xl h-[60px] w-[200px] rounded-lg placeholder:text-[#C4C4C4] pl-[14px] focus:outline-0" type="text" placeholder="Phone number" />
            </div>
          </div>
          <div className="pt-10 pr-32 pl-10">
            <input className="bg-white drop-shadow-xl h-[60px] w-full rounded-lg placeholder:text-[#C4C4C4] pl-[14px] focus:outline-0" type="text" placeholder="Email address" />
          </div>
          <div className="pt-10 pr-32 pl-10">
            <input className="bg-white drop-shadow-xl h-[60px] w-full rounded-lg placeholder:text-[#C4C4C4] pl-[14px] focus:outline-0" type="text" placeholder="Subject" />
          </div>
          <div className="pt-10 pr-20 pl-10">
            <textarea className="w-full drop-shadow-xl h-[160px] resize-none rounded-lg placeholder:text-[#C4C4C4] pl-[14px] pt-[14px] focus:outline-0" id="story" name="story" placeholder="Message" >
            </textarea>
          </div>
          <div className="p-10">
            <button className="transition drop-shadow-xl duration-500 hover:bg-[#ff384b] bg-[#FF4C60] font-bold text-white p-1 px-6 text-xl rounded-xl">Submit</button>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-end place-items-center">
        <div className="lg:w-3/4  bg-[#F9F3F5] grid">
          <h3 className="font-bold text-4xl text-left p-10">Get in touch with us!</h3>
          <p className="p-10 pt-0 font-bold">Whether you want to learn about UX or need product design services let us help with your challenge.</p>
          <div className="xl:flex space-y-10 xl:space-y-0 justify-around p-10">
            <a href="mailto:kylian.germain@hotmail.com" target="_blank" rel="noreferrer">
              <div className="w-full grid place-items-center space-y-5">
                <img src={"/img/mail.png"} alt={"about me image"} />
                <p className="font-bold">kylian.germain@hotmail.com</p>
              </div>
            </a>
            <div className="w-full grid place-items-center space-y-5">
              <img src={"/img/phone.png"} alt={"about me image"} />
              <p className="font-bold">+33 6 95 80 54 50</p>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Contact
