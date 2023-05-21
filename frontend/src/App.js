import { Provider } from 'react-redux';
import { Discovery } from "./views/Discovery";
import { store } from './store/store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <main>
          <Discovery />
        </main>
      </div>
    </Provider>
  );
}

export default App;
