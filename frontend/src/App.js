import { Provider } from 'react-redux';
import { store } from './store/store';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import { HeaderDesktop } from './cmps/header-desktop';
import { NavBar } from './cmps/nav-bar';
import { HeaderMobile } from './cmps/header-mobile';
import { Discovery } from './views/discovery';
import { Restaurants } from './views/restaurants';
import { Screen } from './cmps/screen';
import { SeeAll } from './views/see-all';
import { CategoryView } from './views/category-view';
import { DesktopSearchResults } from './views/desktop-search-results';
import { SearchMobile } from './views/search-mobile';

import { ProfileDesktop } from './views/profile-desktop';
import { PersonalInfo } from './cmps/profile-desktop/personal-info';
import { PaymentMethods } from './cmps/profile-desktop/payment-methods';
import { Addresses } from './cmps/profile-desktop/addresses';
import { OrderHistory } from './cmps/profile-desktop/order-history';
import { Settings } from './cmps/profile-desktop/settings';
import { UserMsg } from './cmps/user-msg';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="main-layout app">
          <Screen />
          {/* <HeaderDesktop />
          <HeaderMobile /> */}
          <main className='main-layout'>
            {/* <NavBar /> */}
            <Routes>
              <Route path="/" element={<Discovery />} />
              <Route path="/discovery" element={<Discovery />} />
              <Route path="/restaurants" element={<Restaurants />} />
              <Route path="/seeall" element={<SeeAll />} />
              <Route path="/search" element={<DesktopSearchResults />} />
              <Route path="/search-mobile" element={<SearchMobile />} />
              <Route path="/category-view" element={<CategoryView />} />
              <Route path="/profile-desktop" element={<ProfileDesktop />} >
                <Route path="/profile-desktop/personal-info" element={<PersonalInfo />} />
                <Route path="/profile-desktop/payment-methods" element={<PaymentMethods/>} />
                <Route path="/profile-desktop/addresses" element={<Addresses />} />
                <Route path="/profile-desktop/order-history" element={<OrderHistory />} />
                <Route path="/profile-desktop/settings" element={<Settings />} />
              </Route >
            </Routes>
            <UserMsg />
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
