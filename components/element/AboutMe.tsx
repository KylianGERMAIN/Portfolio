/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";

interface Props {
  lang: any;
}

const AboutMe = ({ lang }: Props) => {
  return (
    <div id="About_me" className="pt-56 ">
      <div className="h-full grid place-items-center">
        <div className="flex justify-center items-center lg:space-x-10 xl:space-x-32">
          <div className="w-[350px] sm:w-[500px] p-5">
            <p className="text-[#FF4C60] font-bold">
              {lang["About-me"].Open2Work}
            </p>
            <h2 className="text-4xl font-bold pt-5 pb-5 text-[#282828]">
              {lang["About-me"].AboutMe}
            </h2>
            <p className="text-sm lg:text-base">
              {lang["About-me"].Description1}
              <br />
              <br />
              {lang["About-me"].Description2}
            </p>
          </div>
          <img
            className="hidden lg:flex h-[300px] max-w-md "
            src={"/img/aboutMe.png"}
            alt={"about me image"}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
