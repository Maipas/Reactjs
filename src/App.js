import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Container from './components/ItemListContainer';
import Header from './components/Header';


function App() {
  return (
    <div classname= "App">
          <NavBar />
          <Header titulo="Bievenido a Proyecto X" />
          <Container text={'Aloha'} />
          <Container text={'Bievenido'} />
          <Container text={'Welcome'} />
          <Footer />
  </div>
  );
}

export default App;
