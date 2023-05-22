import { Provider } from 'react-redux';
import { store } from './store/store';


function App() {
  return (
    <Provider store={store}>
      <div className="main-layout app">
        <main className='main-layout'>
          <Discovery />
        </main>
      </div>
    </Provider>
  );
}

export default App;
