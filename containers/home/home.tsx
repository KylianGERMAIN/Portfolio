import { NextPage } from "next"
import Four_things from "../../components/element/4things"
import AboutMe from "../../components/element/AboutMe"
import BannerDownload from "../../components/element/Banner-download"
import MyProject from "../../components/element/MyProject"


const HomeContainer: NextPage = () => {
  return (
    <div className="">
      <BannerDownload />
      <Four_things />
      <AboutMe />
      <MyProject />
    </div>
  )
}

export default HomeContainer
