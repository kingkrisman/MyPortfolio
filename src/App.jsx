import react  from 'react';
import "./App.css"
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Backbtn from './Backbtn';




const App=()=>{
  return(
    <div>
<Header/>
<About/>
<Services/>
<Portfolio/>
<Contact/>
<Backbtn/>

    </div>
  )
}
export default App;