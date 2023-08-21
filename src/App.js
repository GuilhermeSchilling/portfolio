import './App.css';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import Presentation from './components/Presentation';
import Skills from './components/Skills';

function App() {
  return (

    <main>
      <Header />
      <Presentation />
      <Container />
      <Skills/>
      <Footer />
    </main>

  );
}

export default App;
