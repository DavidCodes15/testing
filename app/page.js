import "@/app/globals.css";
import ImageSlider from "@/components/user/ImageSlider";
import Carousel from "@/components/user/Carousel";
import MainCertificates from "@/components/user/MainCertificates";
import MainBlogComponent from "@/components/user/MainComponent";

export default function Home() {
  return (
    <>
  <ImageSlider />
  <Carousel />
  <MainCertificates />
  <MainBlogComponent />
    </>

  )
}
