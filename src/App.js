import './App.css';
import AboutUs from './components/AboutUs';
import AskQuestion from './components/AskQuestion';
import ChooseUs from './components/ChooseUs';
import Footer from './components/Footer';
import GetInTouch from './components/GetInTouch';
import IntroSection from './components/IntroSection';
import OurClient from './components/OurClient';
import Pricing from './components/Pricing';
import Services from './components/Services';
import Team from './components/Team';
import TechPartner from './components/TechPartner';

function App() {
  return (
    <div>
      <IntroSection/>
      <section id="about">
        <AboutUs/>
      </section>
      <section id="services">
        <Services/>
      </section>
      <section id="choose">
        <ChooseUs/>
      </section>
      <section id="getintouch">
        <GetInTouch/>
      </section>
      <section id="techpartner">
        <TechPartner/>
      </section>
      <section id="team">
        <Team/>
      </section>
      <section id="ourclient">
        <OurClient/>
      </section>
      <section id="pricing">
        <Pricing/>
      </section>
      <section id="askquestion">
        <AskQuestion/>
      </section>
      <section id="footer">
          <Footer/>
      </section>
    </div>
  );
}

export default App;
