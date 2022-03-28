import { StatusBar } from 'expo-status-bar';   
import { Provider } from 'react-redux'
import { Detail } from './src/pages/detail';
import { Home } from './src/pages/home';
import { store } from './store' 

export default function App() {

  return (
    <Provider store={store}>   
      <Detail />
      <StatusBar style="auto" hidden={true} /> 
    </Provider>
  );
}
 