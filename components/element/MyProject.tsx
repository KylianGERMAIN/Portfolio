/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";

interface Props {
  lang: any;
}

const MyProject = ({ lang }: Props) => {
  const imageContainer = (
      url: string,
      link: string,
      title: string,
      description: string
  ) => {
      return (
          <a href={link} target="_blank" rel="noreferrer">
              <div className="img__wrap p-5">
                  <img
                      className="img__img  h-[450px] rounded-lg  shadow-lg bg-white p-5"
                      src={url}
                  />
                  <div className="img__description font-bold">
                      <h2 className="pb-2 text-xl">{title}</h2>
                      <p>{description}</p>
                  </div>
              </div>
          </a>
      );
  };

  const imageBigContainer = (
      url: string,
      link: string,
      title: string,
      description: string
  ) => {
      return (
          <a href={link} target="_blank" rel="noreferrer">
              <div className="img__wrap p-5">
                  <img
                      className="img__img w-[600px] h-[450px] rounded-lg  shadow-lg bg-white p-5"
                      src={url}
                  />
                  <div className="img__description font-bold">
                      <h2 className="pb-2 text-xl">{title}</h2>
                      <p>{description}</p>
                  </div>
              </div>
          </a>
      );
  };

  return (
      <div id="My_project" className="py-32 ">
          <h2 className="text-4xl font-bold pt-5 pb-5 text-center text-[#282828]">
              {lang["My-Projects"].MyProjects}
          </h2>
          <div className="grid  md:grid-rows-2 xl:grid-rows-1 md:grid-flow-col justify-center place-items-center items-center pt-10">
              {imageContainer(
                  "/img/area.png",
                  "https://github.com/KylianGERMAIN/Area",
                  "Area",
                  lang["My-Projects"].Area
              )}
              {imageContainer(
                  "/img/viepest.png",
                  "http://viepest.com/",
                  "ViePest",
                  lang["My-Projects"].ViePest
              )}
              {imageContainer(
                  "/img/freshen.png",
                  "https://freshen.fr/",
                  "Freshen",
                  lang["My-Projects"].Freshen
              )}
              {imageContainer(
                  "/img/Cloudapp.png",
                  "https://github.com/KylianGERMAIN/CloudApp",
                  "CloudApp",
                  lang["My-Projects"].CloudApp
              )}
          </div>
          <div className="grid  md:grid-rows-2 xl:grid-rows-2 md:grid-flow-col justify-center place-items-center items-center pt-10">
              {imageBigContainer(
                  "/img/apple_like.png",
                  "https://github.com/KylianGERMAIN/apple",
                  "Apple like",
                  lang["My-Projects"].Applelike
              )}
              {imageBigContainer(
                  "/img/orcana.png",
                  "https://github.com/KylianGERMAIN/orcana",
                  "Orcana",
                  lang["My-Projects"].Orcana
              )}
              {imageBigContainer(
                  "/img/api_backoffice.png",
                  "https://github.com/KylianGERMAIN/API_BackOffice",
                  "Api backoffice",
                  lang["My-Projects"].ApiBackoffice
              )}
          </div>
      </div>
  );
};

export default MyProject;
