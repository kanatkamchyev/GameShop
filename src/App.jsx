import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { Provider } from 'react-redux';

import Header from './components/header/header';
import HomePage from './pages/home/home-page';
import { store } from './redux/index';
import GamePage from './pages/Game-page/game-page';

function App() {
  return (
    <Provider store={store}>
      <Router>
    <div className="App">
      <Header />
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/app/:title' element={<GamePage/>}/>
    </Routes>
    </div>
    </Router>
    </Provider>
  );

}

export default App;
