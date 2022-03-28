import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Detail } from '../pages/detail';
import { Home } from '../pages/home';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootRoute = () =>{
    return( 
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Detail" component={Detail} />
            </Stack.Navigator>
        </> 
    )
}