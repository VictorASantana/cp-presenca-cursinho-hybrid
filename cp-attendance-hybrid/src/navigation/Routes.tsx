import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '@src/modules/home/home.page';
import Menu from '@src/modules/menu/menu.page';
import { Profile } from '@src/modules/profile/profile.page';
import { Metrics } from '@src/modules/metrics/metrics.page';
import { Signin } from '@src/modules/auth/signin.page';

export type RootStackParamsList = {
  Home?: undefined;
  Profile?: undefined;
  Menu?: undefined;
  HomeStack?: undefined;
  Schedule?: undefined;
  Metrics?: undefined;
  Signin?: undefined;
};

export type ScreenProps<T extends keyof RootStackParamsList> =
  NativeStackScreenProps<RootStackParamsList, T>;

const Stack = createNativeStackNavigator<RootStackParamsList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Signin' component={Signin} options={() => ({
        headerShown: false,
      })}/>
      <Stack.Screen name='Home' component={Home} options={() => ({
      headerShown: false,
    })}/>
      <Stack.Screen name='Menu' component={Menu} />
      <Stack.Screen options={() => ({headerShown: false})} name='Profile' component={Profile} />
      <Stack.Screen name='Metrics' component={Metrics} />
    </Stack.Navigator>
  )
  
}

const Tab = createBottomTabNavigator<RootStackParamsList>();

export const Routes = () => {
 
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
