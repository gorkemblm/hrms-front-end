import './App.css';
import Dashboard from './layouts/Dashboard';
import Navbar from './layouts/Navbar/Navbar';
/* import Footer from './layouts/Footer';*/
import { Container } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Dashboard />
      </Container>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
