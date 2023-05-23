import { Provider } from 'react-redux';
import { store } from './store/store';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import { Discovery } from './views/discovery';
import { HeaderDesktop } from './cmps/header-desktop';
import { NavBar } from './cmps/nav-bar';
import { Restaurants } from './views/restaurants';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="main-layout app">
          <HeaderDesktop />
          <main className='main-layout'>
          <NavBar />
            <Routes>
              <Route path="/" element={<Discovery />} />
              <Route path="/discovery" element={<Discovery />} />
              <Route path="/restaurants" element={<Restaurants />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
