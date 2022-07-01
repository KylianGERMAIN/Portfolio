/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next"


const Social: NextPage = () => {

  return (
    <div className="pt-20">
      <div className="grid place-items-center">
        <div className="w-[1000px] bg-[#F9F3F5] rounded-lg flex">
          <div className="w-1/3 p-10">
            <h3 className="text-2xl font-bold text-center pb-2">Social Media</h3>
            <p className="text-center text-[#C4C4C4]">Mauris aliquet egestas metus,
              id pellentesque mauris tincidunt</p>
          </div>
          <div className="w-2/3 flex place-items-center">
            <div className="w-1/2 grid justify-end pr-20 ">
              <a href="https://github.com/KylianGERMAIN" target="_blank" rel="noreferrer">
                <div className="w-full grid place-items-center">
                  <img className="text-center " src={'/img/github.png'} alt='icon' />
                  <p className="text-center w-full">Github</p>
                </div>
              </a>
            </div>
            <div className="w-1/2 grid justify-start pr-20 ">
              <a href="https://www.linkedin.com/in/kylian-germain/" target="_blank" rel="noreferrer">
                <div className="w-full grid place-items-center">
                  <img className="" src={'/img/linkedin.png'} alt='icon' />
                  <p>LinkedIn</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Social
