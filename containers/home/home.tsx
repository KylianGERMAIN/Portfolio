import { NextPage } from "next"
import Four_things from "../../components/element/4things"
import AboutMe from "../../components/element/AboutMe"
import BannerDownload from "../../components/element/Banner-download"
import CareerPath from "../../components/element/CareerPath"
import Contact from "../../components/element/Contact"
import MyProject from "../../components/element/MyProject"
import Social from "../../components/element/social"


const HomeContainer: NextPage = () => {
  return (
    <div className="">
      <BannerDownload />
      <Four_things />
      <AboutMe />
      <MyProject />
      <CareerPath />
      <Social />
      <Contact />
    </div>
  )
}

export default HomeContainer
