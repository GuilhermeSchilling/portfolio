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
      <Skills />
      <Footer />
    </main>

  );
}
const lightTheme = {
  '--button-color': '#D3D3D3',
  '--bg-color': '#c5c4c5',
  '--letter-color': 'black',
  '--icons-color': 'black',
  '--icons-hover': 'white',
  '--header-n-footer': 'linear-gradient( to right, rgb(0, 26, 255), rgb(52, 123, 255), rgb(52, 123, 255), rgb(0, 26, 255) )'
}
const darkTheme = {
  '--button-color': '#848e9f',
  '--bg-color': '#212529',
  '--letter-color': '#899095',
  '--icons-color': '#848e9f',
  '--icons-hover': 'white',
  '--header-n-footer': 'linear-gradient( to right, rgb(0, 0, 0), rgb(10,10,10), rgb(10,10,10), rgb(0, 0, 0) )'
}
window.addEventListener("load", function () {
const inputContainer = document.querySelector('input')

inputContainer.addEventListener('change', function () {
  const isChecked = inputContainer.checked
  isChecked ? changeTheme(darkTheme) : changeTheme(lightTheme)
 })
})
 
const rootElement = document.documentElement
function changeTheme(theme) {
  for (let [property, value] of Object.entries(theme)) {
    changeProperty(property, value)
  }
}
function changeProperty(property, value) {
  rootElement.style.setProperty(property, value)
}

export default App;
