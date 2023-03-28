import { Route, Routes } from 'react-router-dom';
import { Container } from 'reactstrap';
import './App.css';
import BuyChart from './components/chart/BuyChart';
import Home from './components/home/Home';
import SelectedProducts from './components/products/SelectedProducts';
import SingleProduct from './components/products/SingleProduct';


function App() {
  return (
    <Container>
      <div className="App">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/category/:category' element={<SelectedProducts />} />
          <Route path='/category/:category/:id' element={<SingleProduct />} />
          <Route path='/buy-chart' element={<BuyChart />} />
        </Routes>


      </div>
    </Container>
  );
}

export default App;
