import Banner from "../components/Banner";
import Hero from "../components/Hero";

import mainImg1 from "../assets/img/banner/banner1.jpg";
import mainImg2 from "../assets/img/banner/banner2.jpg";
import TrendingItems from "../components/TrendingItems";
import TrendingItemsSlider from "../components/TrendingItemsSlider";

function Home() {
  return (
    <>
      <Hero />
      <TrendingItems />
      <Banner img={mainImg1} title="Creative harmonious living" />
      <TrendingItemsSlider />
      <Banner
        img={mainImg2}
        title="Comfortable & Elegante Living"
        revDirection="true"
      />
    </>
  );
}

export default Home;
