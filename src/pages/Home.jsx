import Banner from "../components/Banner";
import Header from "../components/Header";
import Hero from "../components/Hero";

import mainImg1 from "../assets/img/banner/banner1.jpg";
import mainImg2 from "../assets/img/banner/banner2.jpg";
import News from "../components/News";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Banner img={mainImg1} title="Creative harmonious living" />
      <Banner
        img={mainImg2}
        title="Comfortable & Elegante Living"
        revDirection="true"
      />
      <News />
      <Footer />
    </>
  );
}

export default Home;
