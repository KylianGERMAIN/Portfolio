/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";

interface Props {
  lang: any;
}

const CareerPath = ({ lang }: Props) => {
  const frame = (
    path: string,
    date: string,
    title: string,
    structure: string,
    description: string
  ) => {
    return (
      <div className="w-5/6 bg-[#F9F3F5] rounded-lg flex p-5 mb-10">
        <div className="pl-5 w-[150px]">
          <img className="" src={path} alt="icon" />
        </div>
        <div className="w-full space-y-2">
          <p className="font-bold text-sm">{date}</p>
          <p className="font-bold text-lg">{title}</p>
          <p className="font-bold text-sm">{structure}</p>
          <p>{description}</p>
        </div>
      </div>
    );
  };

  return (
      <div>
          <div id="Career_Path" className="w-full flex pt-20">
              <div className="w-1/3 text-[#282828] pr-10 text-xl space-y-5 font-bold hidden lg:flex justify-end">
                  <div className="w-[300px] pt-[150px]">
                      <a href="#Diplomas_and_qualiﬁcations">
                          <h3 className="hover:text-[#FF4C60] cursor-pointer">
                              {lang["Career-Path"].Diplomas}
                          </h3>
                      </a>
                      <a href="#Professional_Experiences">
                          <h3 className="hover:text-[#FF4C60] cursor-pointer">
                              {lang["Career-Path"].Experiences}
                          </h3>
                      </a>
                  </div>
              </div>
              <div className="w-full lg:w-2/3 grid place-items-center lg:place-items-start">
                  <h2
                      id="Diplomas_and_qualiﬁcations"
                      className="text-5xl font-bold pt-5 pb-20 text-left text-[#282828]"
                  >
                      Career path
                  </h2>
                  <h3 className="text-[#FF4C60] font-bold text-2xl pb-10 ">
                      {lang["Career-Path"].Diplomas}
                  </h3>
                  {frame(
                      "/img/school.png",
                      "2019 - 2024",
                      lang["Career-Path"].Epitech,
                      "Epitech Paris",
                      ""
                  )}
                  {frame(
                      "/img/school.png",
                      "2023",
                      lang["Career-Path"].AGH,
                      "AGH University of Science and Technology",
                      ""
                  )}
                  {frame(
                      "/img/school.png",
                      "2021",
                      lang["Career-Path"].Tepitech,
                      "Epitech Paris",
                      ""
                  )}
                  {frame(
                      "/img/school.png",
                      "2019",
                      lang["Career-Path"].Bac,
                      "Lycée Charles Baudelaire",
                      ""
                  )}
                  {frame(
                      "/img/school.png",
                      "2016",
                      lang["Career-Path"].Brevet,
                      "College Stendhal",
                      ""
                  )}
                  <div
                      id="Professional_Experiences"
                      className="pb-10 pt-10"
                  ></div>
                  <h3 className="text-[#FF4C60] font-bold text-2xl pb-10 pt-10">
                      {lang["Career-Path"].Experiences}
                  </h3>
                  {frame(
                      "/img/work.png",
                      lang["Career-Path"].Date0,
                      lang["Career-Path"].Job0,
                      "Blanc-Sec Media",
                      lang["Career-Path"].Description0
                  )}
                  {frame(
                      "/img/work.png",
                      lang["Career-Path"].Date1,
                      lang["Career-Path"].Job1,
                      "Blanc-Sec Media",
                      lang["Career-Path"].Description1
                  )}
                  {frame(
                      "/img/work.png",
                      lang["Career-Path"].Date2,
                      lang["Career-Path"].Job2,
                      "Support Web",
                      lang["Career-Path"].Description2
                  )}
                  {frame(
                      "/img/work.png",
                      lang["Career-Path"].Date3,
                      lang["Career-Path"].Job3,
                      "Ezus",
                      lang["Career-Path"].Description3
                  )}
              </div>
          </div>
      </div>
  );
};

export default CareerPath;
