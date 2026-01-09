import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Workouts from './components/Workouts';
import Exercises from './components/Exercises';
import Roadmap from './components/Roadmap';
import BMICalculator from './components/BMICalculator';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background text-text font-sans selection:bg-primary selection:text-background">
      <Navbar />
      <Hero />
      <About />
      <Workouts />
      <Exercises />
      <Roadmap />
      <BMICalculator />
      <Footer />
    </div>
  );
}

export default App;
