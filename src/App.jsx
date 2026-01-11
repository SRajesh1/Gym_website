import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import About from './components/About';
import Facilities from './components/Facilities';
import Workouts from './components/Workouts';
import Trainers from './components/Trainers';
import ClassSchedule from './components/ClassSchedule';
import Exercises from './components/Exercises';
import Roadmap from './components/Roadmap';
import Testimonials from './components/Testimonials';
import BMICalculator from './components/BMICalculator';
import LeadCapture from './components/LeadCapture';
import BlogSection from './components/BlogSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="bg-background text-text font-sans selection:bg-primary selection:text-background">
      <Navbar />
      <Hero />
      <About />
      <Facilities />
      <Workouts />
      <Trainers />
      <ClassSchedule />
      <Exercises />
      <Roadmap />
      <Testimonials />
      <BMICalculator />
      <BlogSection />
      <Pricing />
      <LeadCapture />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
