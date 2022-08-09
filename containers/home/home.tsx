import { NextPage } from "next";
import { useEffect, useState } from "react";
import Four_things from "../../components/element/4things";
import AboutMe from "../../components/element/AboutMe";
import BannerDownload from "../../components/element/Banner-download";
import CareerPath from "../../components/element/CareerPath";
import Contact from "../../components/element/Contact";
import MyProject from "../../components/element/MyProject";
import Social from "../../components/element/social";
import jsonfr from "../../public/trad-json/fr.json";
import jsonen from "../../public/trad-json/en.json";

const HomeContainer: NextPage = () => {
  const [lang, setLang] = useState(jsonfr);

  useEffect(() => {
    var userLang = navigator.language;
    alert(userLang);
    if (userLang != "fr") {
      setLang(jsonen);
    } else {
      setLang(jsonfr);
    }
  }, []);

  return (
    <div className="">
      <BannerDownload lang={lang} setLang={setLang} />
      <Four_things lang={lang} />
      <AboutMe lang={lang} />
      <MyProject lang={lang} />
      <CareerPath lang={lang} />
      <Social />
      <Contact />
    </div>
  );
};

export default HomeContainer;
