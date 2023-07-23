import "./App.css";
import BannerSection from "./components/BannerSection";
import Header from "./components/Header";
import Restaurants from "./components/Restaurants";
import RestaurantsHeader from "./components/RestaurantsHeader";
function App() {
  return (
    <div className="App">
      <Header />
      <BannerSection />
      <RestaurantsHeader />
      <Restaurants />
    </div>
  );
}

export default App;
