/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next"
import Image from 'next/image'


const Four_things: NextPage = () => {

  const container = (url_media: string, name: string) => {
    return <div className="grid place-items-center bg-white w-[150px] justify-center h-[150px] shadow-lg rounded-lg">
      <img className="" src={url_media} alt={url_media} />
      <p className="w-[100px] h-full text-center">{name}</p>
    </div>
  }

  return (
    <div className="flex justify-center sm:gap-32 xl:gap-52">
      <div className='grid grid-rows-2 grid-flow-col gap-4'>
        {container("/img/website-design.png", "Web Development")}
        {container("/img/figma.png", "Figma")}
        {container("/img/app.png", "Apps Development")}
        {container("/img/bulb.png", "Project Management")}
      </div>
      <div className='hidden lg:flex justify-center items-center'>
        <img
          src="/img/computer.png"
          alt="Picture of boy"
          className="h-[300px] max-w-md "
        />
      </div>
    </div>
  )
}

export default Four_things
