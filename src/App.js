import './App.css';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import IntroSection from './components/IntroSection';
import Services from './components/Services';
import Team from './components/Team';

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
      <section id="team">
        <Team/>
      </section>
      <section id="footer">
          <Footer/>
      </section>
    </div>
  );
}

export default App;
