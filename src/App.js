import "./App.css";
import Body from "./components//Homepage/HomePage";
import DeatoxPackage from "./components/Body/DeatoxPackage";
import Features from "./components/Body//Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="relative">
      <div className="bg-[#545454] h-[300vh] w-[19.5rem] mx-[8.5rem] -z-0 absolute"></div>
      <Header />
      <div className="bg-gradient-to-b from-[#F9D326] to-[#545454]">
        <Body />
        <Features />
        <DeatoxPackage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
