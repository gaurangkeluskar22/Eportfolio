import logo from './logo.svg';
import './App.css';
import About from './component/about';
import Background from './component/background';
import Navbar from './component/navbar';
import Footer from './component/footer';
import Projects from './component/projects';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Background/>
      <About/>
      <Projects/>
      <Footer/>

    </div>
  );
}

export default App;
