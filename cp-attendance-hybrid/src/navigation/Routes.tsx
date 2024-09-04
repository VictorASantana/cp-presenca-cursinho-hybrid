import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { Home } from '@src/modules/home/home';


export type RootStackParamsList = {
  Home?: undefined;
};

export type ScreenProps<T extends keyof RootStackParamsList> =
  NativeStackScreenProps<RootStackParamsList, T>;

const Stack = createNativeStackNavigator<RootStackParamsList>();

export const Routes = () => {
 
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
          <Stack.Screen name='Home' component={Home}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};
