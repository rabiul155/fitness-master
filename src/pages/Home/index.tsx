import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";

function Home() {
  return (
    <div className="flex flex-col gap-4 mb-4">
      <Banner />
      <Categories />
    </div>
  );
}

export default Home;
