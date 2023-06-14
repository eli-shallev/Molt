import { Provider } from 'react-redux';
import { store } from './store/store';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import { Discovery } from './views/discovery';
import { HeaderDesktop } from './cmps/header-desktop';
import { NavBar } from './cmps/nav-bar';
import { Restaurants } from './views/restaurants';
import { Screen } from './cmps/screen';
import { HeaderMobile } from './cmps/header-mobile';
import { SeeAll } from './views/see-all';
import { CategoryView } from './views/category-view';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="main-layout app">
          <Screen />
          {/* <HeaderDesktop />
          <HeaderMobile /> */}
          <main className='main-layout'>
            <NavBar />
            <Routes>
              <Route path="/" element={<Discovery />} />
              <Route path="/discovery" element={<Discovery />} />
              <Route path="/restaurants" element={<Restaurants />} />
              <Route path="/seeall" element={<SeeAll />} />
              <Route path="/category-view" element={<CategoryView />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
