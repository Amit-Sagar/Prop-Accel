import About from "components/page-section/About";
import Banner from "components/page-section/Banner";
import Pricing from "components/page-section/Pricing";
import Review from "components/page-section/Review";
import AppLayout from "./layout";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <AppLayout>
        <Banner />
        <About />
        <Pricing />
        <Review />
      </AppLayout>
    </div>
  );
}

export default App;
