
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from '../Components/Navbar';
import { BrowserRouter, } from 'react-router-dom';
import Routess from '../routes/Routess';
import { Provider } from 'react-redux';
import Store from '../store/Store';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={Store}>
        <Navbar />
        <Routess />
        </Provider>
        
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
