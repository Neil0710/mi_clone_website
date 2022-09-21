import "./App.css";
import dataInfo from "./data/data.json";
import PreNavbar from "./components/PreNavbar.js";
import Navbar from "./components/Navbar.js";
import NavOptios from "./components/NavOptios.js";
import Slider from "./components/Slider.js";
import Offers from "./components/Offers.js";
import Heading from "./components/Heading.js";
import StarProducts from "./components/StarProducts.js";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js";
import HotAccessories from "./components/HotAccessories.js";
import ProductReviews from "./components/ProductReviews.js";
import Videos from "./components/Videos.js";
import Banner from "./components/Banner.js";
import Footer from "./components/Footer.js";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <NavOptios
        xiaomiPhones={dataInfo.miPhones}
        redmiPhones={dataInfo.redmiPhones}
        tV={dataInfo.tv}
        laptops={dataInfo.laptop}
        fitness_Lifestyle={dataInfo.fitnessAndLifeStyle}
        home={dataInfo.home}
        audio={dataInfo.audio}
        accessories={dataInfo.accessories}
      />
      <Slider start={dataInfo.banner.start} />
      <Offers offers={dataInfo.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProducts starProduct={dataInfo.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Route exact path="/music">
        <HotAccessories
          music={dataInfo.hotAccessories.music}
          musicCover={dataInfo.hotAccessoriesCover.music}
        />
      </Route>
      <Route exact path="/smartDevice">
        <HotAccessories
          smartDevice={dataInfo.hotAccessories.smartDevice}
          smartDeviceCover={dataInfo.hotAccessoriesCover.smartDevice}
        />
      </Route>
      <Route exact path="/home">
        <HotAccessories
          home={dataInfo.hotAccessories.home}
          homeCover={dataInfo.hotAccessoriesCover.home}
        />
      </Route>
      <Route exact path="/lifeStyle">
        <HotAccessories
          lifeStyle={dataInfo.hotAccessories.lifeStyle}
          lifeStyleCover={dataInfo.hotAccessoriesCover.lifeStyle}
        />
      </Route>
      <Route exact path="/mobileAccessories">
        <HotAccessories
          mobileAccessories={dataInfo.hotAccessories.mobileAccessories}
          mobileAccessoriesCover={
            dataInfo.hotAccessoriesCover.mobileAccessories
          }
        />
      </Route>
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={dataInfo.productReviews} />
      <Heading text="VIDEOS" />
      <Videos videos={dataInfo.videos} />
      <Heading text="In the press" />
      <Banner banner={dataInfo.banner} />
      <Footer footer={dataInfo.footer} />
    </Router>
  );
}

export default App;
