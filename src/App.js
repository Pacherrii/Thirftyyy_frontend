import './App.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import HomePage from './pages/Home'
import Overall from './pages/Overall'
import Yourtrading from './pages/YourTrading'
import NoRQTrading from './pages/NoRQTrading'
import OverallRating from './pages/OverallRating'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <HomePage />} />
          <Route path='/Overall' element={ <Overall />} />
          <Route path='/YourTrading' element={ <Yourtrading />} />
          <Route path='/NoRQTrading' element={ <NoRQTrading />} />
          <Route path='/OverallRating' element={<OverallRating/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
