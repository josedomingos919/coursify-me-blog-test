import { StatusBar } from 'expo-status-bar';   
import { Provider } from 'react-redux'
import { Home } from './src/pages/home';
import { store } from './store' 

export default function App() {

  return (
    <Provider store={store}>   
      <Home />
      <StatusBar style="auto" hidden={true} /> 
    </Provider>
  );
}
 