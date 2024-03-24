import Body from '../src/components/Body'
import { Provider } from 'react-redux';
import appStore from './utils/redux/appStore';
function App() {
  return (
    <Provider store={appStore}>
          <Body/>

    </Provider>
  );
}

export default App;
