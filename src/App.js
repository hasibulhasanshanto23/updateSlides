import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import AboutFlight from './components/AboutFlight'
import SliderSection from './components/SliderSection';
 import SaveSection from './components/SaveSection.js'
 import PackageDeals from './components/PackageDeals.js'
 import Deals from './components/Deals.js'

function App() {
  return (
    <div >
     <AboutFlight/>
     <SliderSection/>
     <SaveSection/>
     {/* <PackageDeals/> */}
     <Deals/>
    </div>
  );
}

export default App;
