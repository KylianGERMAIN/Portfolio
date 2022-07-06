/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next"


const CareerPath: NextPage = () => {

  const frame = (path: string, date: string, title: string, structure: string, description: string) => {
    return (
      <div className="w-5/6 bg-[#F9F3F5] rounded-lg flex p-5 mb-10">
        <div className="pl-5 w-[150px]">
          <img className="" src={path} alt='icon' /></div>
        <div className="w-full space-y-2">
          <p className="font-bold text-sm">{date}</p>
          <p className="font-bold text-lg">{title}</p>
          <p className="font-bold text-sm">{structure}</p>
          <p>{description}</p>
        </div>
      </div>
    )
  }


  return (
    <div>
      <div id="Career_Path" className="w-full flex pt-20">
        <div className="w-1/3 text-[#282828] pr-10 text-xl space-y-5 font-bold hidden lg:flex justify-end">
          <div className="w-[270px] pt-[150px]">
            <a href="#Diplomas_and_qualiﬁcations">
              <h3 className="hover:text-[#FF4C60] cursor-pointer">Diplomas and qualiﬁcations</h3>
            </a>
            <a href="#Professional_Experiences">
              <h3 className="hover:text-[#FF4C60] cursor-pointer">Professional Experiences</h3>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-2/3 grid place-items-center lg:place-items-start">
          <h2 id="Diplomas_and_qualiﬁcations" className="text-5xl font-bold pt-5 pb-20 text-left text-[#282828]">Career path</h2>
          <h3 className="text-[#FF4C60] font-bold text-2xl pb-10 ">Diplomas and qualiﬁcations</h3>
          {frame("/img/school.png", "2019 - 2024", "Expert en Technologies de l'Information (Diploma of expert of informatic system)", "Epitech Paris", "")}
          {frame("/img/school.png", "2023", "Erasmus + in Krakow (Poland)", "AGH University of Science and Technology", "")}
          {frame("/img/school.png", "2021", "Tepitech 780 (TOEIC)", "Epitech Paris", "")}
          {frame("/img/school.png", "2020", "TC1 educational training", "Ionis-STM", "")}
          {frame("/img/school.png", "2019", "Baccalaureat Scientifique Option Informatique (High School diploma)", "Lycée Charles Baudelaire", "")}
          {frame("/img/school.png", "2016", "Brevet des collèges (Junior High School diploma)", "College Stendhal", "")}
          <div id="Professional_Experiences" className="pb-10 pt-10"></div>
          <h3 className="text-[#FF4C60] font-bold text-2xl pb-10 pt-10">Professional Experiences</h3>
          {frame("/img/work.png", "Avril 2022 - Juillet 2022", "Full Stack Developer", "Blanc-Sec Media", `Created a web project alone in Nextjs using Tailwind for the CSS and linked it to Strapi as a back office. Creating continuous testing with playwright and deploying with heroku`)}
          {frame("/img/work.png", "Octobre 2021 - Avril 2022", "Part-time Web Developer", "Support Web", "CSS correction on different websites and Creation of a specification of a website.")}
          {frame("/img/work.png", "July 2020 - January 2021", "Full Stack Developer", "Ezus", "Continuous integration in agile Scrum methodology of a back and a front from a model. The front is based on React js and CSS and the back is in python with a SQL database hosted on amazon AWS")}
        </div>

      </div>
    </div>
  )
}

export default CareerPath
