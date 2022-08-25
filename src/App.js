import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home /> }/>
        <Route path='*' element={<h2>Page Not Found</h2>}/>
        
      </Routes>
      <Footer />
    </BrowserRouter>  
  );
}

export default App;
