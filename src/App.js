import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import AboutFlight from './components/AboutFlight'
import SliderSection from './components/SliderSection';
import Deals from './components/Deals.js'
import UpdateSave from './components/UpdateSave'

function App() {
  return (
    <div>
     <AboutFlight/>
     <SliderSection/>
     <UpdateSave/>
     <Deals/>
    </div>
  );
}

export default App;
