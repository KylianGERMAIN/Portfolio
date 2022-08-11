/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import jsonfr from "../../public/trad-json/fr.json";
import jsonen from "../../public/trad-json/en.json";

interface Props {
  lang: any;
  setLang: any;
}

const BannerDownload = ({ lang, setLang }: Props) => {
  return (
    <div className="">
      <div id="Home" className="flex  justify-center py-32 md:gap-20 xl:gap-52">
        <div className=" flex flex-col justify-center items-center ">
          <div className="pl-5 lg:p-0">
            <p className="text-4xl md:text-5xl text-left font-bold pb-5 text-[#282828]">
              {lang["Banner-Download"].Hi}
            </p>
            <p className="text-4xl md:text-5xl text-left font-bold pb-5 text-[#282828]">
              Kylian Germain
            </p>
            <p className="text-3xl md:text-5xl text-left font-bold text-[#FF4C60] pb-5">
              {lang["Banner-Download"].Job}
            </p>
            <a
              href="EPITECH_GERMAIN_Kylian_CV.pdf"
              download="EPITECH_GERMAIN_Kylian_CV"
            >
              <button className="drop-shadow-xl transition duration-500 hover:bg-[#ff384b] bg-[#FF4C60] font-bold text-white p-1 px-6 text-3xl rounded-xl">
                {lang["Banner-Download"].Download}
              </button>
            </a>
            <div className="flex items-center pt-12 space-x-5 ">
              <img
                src="/img/fr_flag.png"
                alt="Picture of boy"
                className="h-[30px]  max-w-md cursor-pointer"
                onClick={() => {
                  setLang(jsonfr);
                }}
              />
              <img
                src="/img/en_flag.png"
                alt="Picture of boy"
                className="h-[30px]  max-w-md cursor-pointer"
                onClick={() => {
                  setLang(jsonen);
                }}
              />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex justify-center items-center">
          <img
            src="/img/boy.png"
            alt="Picture of boy"
            className="h-[500px]  max-w-md "
          />
        </div>
      </div>
    </div>
  );
};

export default BannerDownload;
