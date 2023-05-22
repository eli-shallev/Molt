import { Provider } from 'react-redux';
import { store } from './store/store';
import { Discovery } from './views/discovery';
import { HeaderDesktop } from './cmps/header-desktop';


function App() {
  return (
    <Provider store={store}>
      <div className="main-layout app">
        <HeaderDesktop/>
        <main className='main-layout'>
            <Discovery/>
        </main>
      </div>
    </Provider>
  );
}

export default App;
