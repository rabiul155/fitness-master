import Banner from "./Banner/Banner";
import Benefit from "./Benefit/Benefit";
import Categories from "./Categories/Categories";
import Featured from "./Featured/Featured";
import ImageGallery from "./Gallery/ImageGallery";

function Home() {
  return (
    <div className="flex flex-col gap-4 mb-4">
      <Banner />
      <Categories />
      <Featured />
      <ImageGallery />
      <Benefit />
    </div>
  );
}

export default Home;
