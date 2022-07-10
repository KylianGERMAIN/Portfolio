/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next"


const MyProject: NextPage = () => {

  const imageContainer = (url: string, link: string, title: string, description: string) => {
    return (
      <a href={link} target="_blank" rel="noreferrer">
        <div className="img__wrap p-5">
          <img className="img__img  h-[450px] rounded-lg  shadow-lg bg-white p-5" src={url} />
          <div className="img__description font-bold">
            <h2 className="pb-2 text-xl">{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </a >);
  }

  const imageContainerBIG = (url: string, link: string, title: string, description: string) => {
    return (
      <a href={link} target="_blank" rel="noreferrer">
        <div className=" img__wrap p-5">
          <img className="img__img h-[250px] rounded-lg  shadow-lg bg-white p-5" src={url} />
          <div className="img__descriptions font-bold">
            <h2 className="pb-2 text-xl">{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </a >);
  }

  return (
    <div id="My_project" className="py-32 ">
      <h2 className="text-4xl font-bold pt-5 pb-5 text-center text-[#282828]">My project</h2>
      <div className="grid  md:grid-rows-2 xl:grid-rows-1 md:grid-flow-col justify-center place-items-center items-center pt-10">
        {imageContainer("/img/area.png", "https://github.com/KylianGERMAIN/Area", "Area", "This is a reaction action project with APIs. The project was elected best project in the class")}
        {imageContainer("/img/viepest.png", "http://viepest.com/", "ViePest", "This website was created by myself during an internship and is linked to a strapi back office")}
        {imageContainer("/img/freshen.png", "https://freshen.fr/", "Freshen", "This project is my innovative project of end Epitech it is to return for 2024 and has for goal to value the world of the second hand")}
        {imageContainer("/img/Cloudapp.png", "https://github.com/KylianGERMAIN/CloudApp", "CloudApp", "This is a simple weather application connected to the open weather api")}
      </div>
    </div>
  )
}

export default MyProject
