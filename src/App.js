import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import Skills from './components/Skills/Skills';
import Project from './components/Projects/Project';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import FormSuccess from './components/Contact/FormSuccess';


function App() {
  return (
    <div className="App">
        <HeroSection />
        <Skills />
        <Project />
        <FormSuccess />
        <Footer />
    </div>
  );
}

export default App;
