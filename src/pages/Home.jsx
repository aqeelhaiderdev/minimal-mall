import Banner from "../components/Banner";
import Hero from "../components/Hero";

import mainImg1 from "../assets/img/banner/banner1.jpg";
import mainImg2 from "../assets/img/banner/banner2.jpg";
import TrendingItems from "../components/TrendingItems";
import TrendingSlider from "../components/TrendingSlider";

function Home() {
  return (
    <>
      <Hero />
      <TrendingItems />
      <Banner img={mainImg1} title="Creative harmonious living" />
      <div className="container mx-auto px-10 py-14">
        <TrendingSlider />
      </div>
      <Banner
        img={mainImg2}
        title="Comfortable & Elegante Living"
        revDirection="true"
      />
    </>
  );
}

export default Home;
