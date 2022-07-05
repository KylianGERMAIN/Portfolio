/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next"



const AboutMe: NextPage = () => {

  return (
    <div id="About_me" className="pt-56 ">
      <div className="h-full grid place-items-center">
        <div className="flex justify-center items-center lg:space-x-10 xl:space-x-32">
          <div className="w-[350px] sm:w-[500px] p-5">
            <p className="text-[#FF4C60] font-bold">Im Open to work</p>
            <h2 className="text-4xl font-bold pt-5 pb-5 text-[#282828]">About Me.</h2>
            <p className="text-sm lg:text-base">
              I&lsquo;m a student in computer science but also, i&lsquo;m a full-stack developer, specializing in both web and mobile, with a certain sensitivity to UX and UI.<br /><br />
              I am passionate about everything that touches new technologies. I love to discover and use these discoveries on different projects
            </p>
          </div>
          <img className="hidden lg:flex h-[300px] max-w-md " src={"/img/aboutMe.png"} alt={"about me image"} />
        </div>
      </div>
    </div>
  )
}

export default AboutMe
