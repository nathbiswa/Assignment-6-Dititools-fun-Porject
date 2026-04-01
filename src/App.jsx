import { Suspense, use, useState } from "react";
import "./App.css";
import DigitalTool from "./Components/DigitalTool/DigitalTool";
import Footer from "./Components/Footer/Footer";
import GetStart from "./Components/GetStart/GetStart";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navebar/Navbar";
import Pricing from "./Components/Pricing/Pricing";
import Trail from "./Components/Trail/Trail";
import User from "./Components/User/User";
import { ToastContainer } from "react-toastify";

const dataFetching = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const dataPromise = dataFetching();
  const [availableProducts, setAvailableProducts] = useState([]);
  return (
    <>
      <Navbar
        setAvailableProducts={setAvailableProducts}
        availableProducts={availableProducts}
      />
      <Hero />
      <User />
      <Suspense
        fallback={
          <div className="text-center text-2xl font-bold">Loading...</div>
        }
      >
        <DigitalTool
          dataPromise={dataPromise}
          setAvailableProducts={setAvailableProducts}
          availableProducts={availableProducts}
        />
      </Suspense>
      <GetStart />
      <Pricing />
      <Trail />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
