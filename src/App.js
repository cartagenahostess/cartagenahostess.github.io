import { Suspense } from 'react';

import About from './components/About';
import CTA from './components/CTA';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
// import Testimonials from './components/Testimonials';

function Fallback () {
  return <div className="h-screen w-screen bg-emerald-50" />;
}

function App () {
  return (
    <Suspense fallback={ <Fallback /> }>
      <div className="App">
        <div className="relative overflow-hidden">
          <div className="relative pt-6 bg-emerald-50">
            <Navbar />
            <Hero />
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ecfdf5" fillOpacity="1" d="M0,288L40,272C80,256,160,224,240,186.7C320,149,400,107,480,122.7C560,139,640,213,720,240C800,267,880,245,960,213.3C1040,181,1120,139,1200,138.7C1280,139,1360,181,1400,202.7L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z">
            </path>
          </svg>
        </div>
        <Features />
        <About />
        <CTA />
        {/* <Testimonials />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#059669" fillOpacity="1" d="M0,288L40,272C80,256,160,224,240,186.7C320,149,400,107,480,122.7C560,139,640,213,720,240C800,267,880,245,960,213.3C1040,181,1120,139,1200,138.7C1280,139,1360,181,1400,202.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
        </path>
      </svg> */}
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
