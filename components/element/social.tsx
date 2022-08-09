/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";

const Social: NextPage = () => {
  return (
    <div className="pt-20">
      <div className="grid w-full place-items-center">
        <div className=" bg-[#F9F3F5] rounded-lg flex">
          <div className="md:w-[500px] p-10">
            <h3 className="text-2xl font-bold text-center pb-2">
              Social Networks
            </h3>
            <p className="text-center text-[#C4C4C4]">
              Social networks where I am active
            </p>
          </div>
          <div className="w-2/3 flex place-items-center">
            <div className="w-1/2 grid justify-end pr-10 ">
              <a
                href="https://github.com/KylianGERMAIN"
                target="_blank"
                rel="noreferrer"
              >
                <div className="w-full grid place-items-center">
                  <img
                    className="text-center "
                    src={"/img/github.png"}
                    alt="icon"
                  />
                  <p className="text-center w-full">Github</p>
                </div>
              </a>
            </div>
            <div className="w-1/2 grid justify-start ">
              <a
                href="https://www.linkedin.com/in/kylian-germain/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="w-full grid place-items-center">
                  <img className="" src={"/img/linkedin.png"} alt="icon" />
                  <p>LinkedIn</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
