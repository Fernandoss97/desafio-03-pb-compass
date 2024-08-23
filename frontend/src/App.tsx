import BannerGlobal from "./components/banner/BannerGlobal";
import Header from "./components/header/Header";
import BannerHome from "./components/banner/BannerHome";
import SearchBar from "./components/searchBar/SearchBar";

function App() {
  return (
    <>
      <Header />
      <BannerGlobal title="Tour Package" />
      {/* <SearchBar /> */}
    </>
  );
}

export default App;
