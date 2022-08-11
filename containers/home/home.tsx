import { NextPage } from "next";
import { useEffect, useState } from "react";
import Four_things from "../../components/element/4things";
import AboutMe from "../../components/element/AboutMe";
import BannerDownload from "../../components/element/Banner-download";
import CareerPath from "../../components/element/CareerPath";
import Contact from "../../components/element/Contact";
import MyProject from "../../components/element/MyProject";
import Social from "../../components/element/social";

interface Props {
  lang: any;
  setLang: any;
}

const HomeContainer = ({ lang, setLang }: Props) => {
  return (
    <div className="">
      <BannerDownload lang={lang} setLang={setLang} />
      <Four_things lang={lang} />
      <AboutMe lang={lang} />
      <MyProject lang={lang} />
      <CareerPath lang={lang} />
      <Social lang={lang} />
      <Contact lang={lang} />
    </div>
  );
};

export default HomeContainer;
