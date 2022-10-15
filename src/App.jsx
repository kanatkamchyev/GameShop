import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Header from './components/header/header';
import HomePage from './pages/home/home-page';

function App() {
  return (
      <Router>
    <div className="App">
      <Header />
    <Routes>
      <Route path='/' element={<HomePage/>}/>
    </Routes>
        
      

    </div>
    </Router>
  );

}

export default App;
