import Banner from "../components/Banner";
import Hero from "../components/Hero";

import mainImg1 from "../assets/img/banner/banner1.jpg";
import mainImg2 from "../assets/img/banner/banner2.jpg";

function Home() {
  return (
    <>
      <Hero />
      <Banner img={mainImg1} title="Creative harmonious living" />
      <Banner
        img={mainImg2}
        title="Comfortable & Elegante Living"
        revDirection="true"
      />
    </>
  );
}

export default Home;
