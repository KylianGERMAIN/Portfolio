/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { useState } from "react";
import Sendmail from "../../pages/api/contact";

const Contact: NextPage = () => {
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");

  const [Send, setSend] = useState(false);
  const [Error, setError] = useState(0);

  function reset() {
    setName("");
    setPhone("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  return (
    <div
      id="Contact"
      className=" md:flex  flex-row-reverse items-center pt-20 pb-40 justify-end p-10 space-y-10 md:space-y-0"
    >
      <div className="lg:w-1/2 ">
        <div className="lg:w-3/4 shadow-2xl rounded-lg pt-10 ">
          <div className="pl-10 pr-20">
            <div className="grid xl:flex xl:space-x-2  space-y-10 xl:space-y-0">
              <input
                className="bg-white drop-shadow-xl h-[60px] w-[200px] rounded-lg placeholder:text-[#C4C4C4] pr-[14px] pl-[14px] focus:outline-0"
                type="text"
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={Name}
              />
              <input
                className="bg-white drop-shadow-xl h-[60px] w-[200px] rounded-lg placeholder:text-[#C4C4C4] pr-[14px] pl-[14px] focus:outline-0"
                type="text"
                placeholder="Phone number"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                value={Phone}
              />
            </div>
          </div>
          {Error != 1 ? (
            <div>
              <div className="pt-10 pr-10 xl:pr-32 pl-10">
                <input
                  className="bg-white drop-shadow-xl h-[60px] w-full rounded-lg placeholder:text-[#C4C4C4] pr-[14px] pl-[14px] focus:outline-0"
                  type="text"
                  placeholder="Email address*"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={Email}
                />
              </div>
              <div className="pt-10 pr-10 xl:pr-32 pl-10">
                <input
                  className="bg-white drop-shadow-xl h-[60px] w-full rounded-lg placeholder:text-[#C4C4C4] pr-[14px] pl-[14px] focus:outline-0"
                  type="text"
                  placeholder="Subject*"
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                  value={Subject}
                />
              </div>
            </div>
          ) : (
            <div>
              <div className="pt-10 pr-10 xl:pr-32 pl-10">
                <input
                  className="bg-white h-[60px] w-full rounded-lg placeholder:text-[#C4C4C4] pr-[14px] pl-[14px] border-red-500 focus:outline-0 border-red-600 border-2"
                  type="text"
                  placeholder="Email address*"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={Email}
                />
                <p className="text-red-600">This field is required.</p>
              </div>
              <div className="pt-10 pr-10 xl:pr-32 pl-10">
                <input
                  className="bg-white h-[60px] w-full rounded-lg placeholder:text-[#C4C4C4] pr-[14px] pl-[14px] focus:outline-0   border-red-600 border-2"
                  type="text"
                  placeholder="Subject*"
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                  value={Subject}
                />
                <p className="text-red-600">This field is required.</p>
              </div>
            </div>
          )}
          <div className="pt-10 pr-20 pl-10">
            <textarea
              className="w-full drop-shadow-xl h-[160px] resize-none rounded-lg placeholder:text-[#C4C4C4] pr-[14px] pl-[14px] pt-[14px] focus:outline-0"
              id="story"
              name="story"
              placeholder="Message"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={Message}
            ></textarea>
          </div>
          <div className="p-10 block">
            {Error != 2 ? (
              <button
                className="transition drop-shadow-xl duration-500 hover:bg-[#ff384b] bg-[#FF4C60] font-bold text-white p-1 px-6 text-xl rounded-xl"
                onClick={() => {
                  if (Email.length != 0 && Subject.length != 0) {
                    fetch("/api/contact", {
                      method: "POST",
                      headers: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        Name: Name,
                        Phone: Phone,
                        Email: Email,
                        Subject: Subject,
                        Message: Message,
                      }),
                    })
                      .then((res) => {
                        if (res.status === 200) {
                          setSend(true);
                          setError(0);
                          reset();
                        } else {
                          setError(2);
                        }
                      })
                      .catch((e) => console.log(e));
                  } else {
                    setError(1);
                  }
                }}
              >
                Submit
              </button>
            ) : (
              <button className="transition drop-shadow-xl cursor-default	 duration-500 hover:bg-[#f90000] bg-[#f90000] font-bold text-white p-1 px-6 text-xl rounded-xl">
                Error
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-end place-items-center">
        <div className="lg:w-3/4  bg-[#F9F3F5] grid">
          <h3 className="font-bold text-4xl text-left p-10">Contact me!</h3>
          <p className="p-10 pt-0 font-bold">
            Would you like to offer me A permanent contract ? Or or implement
            discuss with me about a project ? Do not hesitate to contact me.
          </p>
          <div className="xl:flex space-y-10 xl:space-y-0 justify-around p-10">
            <a
              href="mailto:kylian.germain@hotmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="w-full grid place-items-center space-y-5">
                <img src={"/img/mail.png"} alt={"about me image"} />
                <p className="font-bold">kylian.germain@hotmail.com</p>
              </div>
            </a>
            <div className="w-full grid place-items-center space-y-5">
              <img src={"/img/phone.png"} alt={"about me image"} />
              <p className="font-bold">+33 6 95 80 54 50</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
