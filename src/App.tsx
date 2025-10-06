import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
 import About from './components/About';
 import Contact from './components/Contact';
 import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;