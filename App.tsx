import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';   
import { Provider } from 'react-redux'  
import { store } from './store'  
import { NavigationContainer } from '@react-navigation/native';
import { RootRoute } from './src/routes';
export default function App() {

  return (
    <Provider store={store}>  
      <NavigationContainer>
        <RootRoute />
        <StatusBar style="auto" hidden={true} /> 
      </NavigationContainer> 
    </Provider>
  );
}
 