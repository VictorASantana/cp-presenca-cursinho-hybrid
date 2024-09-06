import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '@src/modules/home/home.page';
import { Theme } from 'assets/theme/theme';
import { Menu } from '@src/modules/menu/menu.page';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { Schedule } from '@src/modules/schedule/schedule.page';
import { Profile } from '@src/modules/profile/profile.page';

export type RootStackParamsList = {
  Home?: undefined;
  Profile?: undefined;
};

export type ScreenProps<T extends keyof RootStackParamsList> =
  NativeStackScreenProps<RootStackParamsList, T>;

const Stack = createNativeStackNavigator<RootStackParamsList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} options={() => ({
      headerShown: false,
    })}/>
      <Stack.Screen name='Profile' component={Profile} />
    </Stack.Navigator>
  )
  
}

const Tab = createBottomTabNavigator();

export const Routes = () => {
 
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='HomeStack'
        screenOptions={() => ({
          tabBarLabel: () => null,
          tabBarStyle: {
            backgroundColor: Theme.Colors.primary, 
            borderTopColor: 'transparent', 
            elevation: 0, 
            shadowOpacity: 0, 
            height: 60,
            borderTopRightRadius: 8,
            borderTopLeftRadius: 8,
          },
        })}
      >
        <Tab.Screen name='Menu' component={Menu} options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={
                focused ? 
                {alignItems: 'center', justifyContent: 'center', backgroundColor: Theme.Colors.secondary, borderRadius: 20, height: 40, width: 40} : 
                {alignItems: 'center', justifyContent: 'center'}}>
                <Icon name='menu' size={32} color={Theme.Colors.white} style={{ margin: 2 }}/>
              </View>
            ) 
          }
        }}/>
        <Tab.Screen name='HomeStack' component={StackNavigator} options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <View style={focused ? 
                {alignItems: 'center', justifyContent: 'center', backgroundColor: Theme.Colors.secondary, borderRadius: 20, height: 40, width: 40} : 
                {alignItems: 'center', justifyContent: 'center'}}>
                <Icon name='home' size={32} color={Theme.Colors.white} style={{ marginBottom: 2, marginRight: 1 }}/>
              </View>
            ) 
          }
        }}/>
        <Tab.Screen name='Schedule' component={Schedule} options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={focused ? 
                {alignItems: 'center', justifyContent: 'center', backgroundColor: Theme.Colors.secondary, borderRadius: 20, height: 40, width: 40} : 
                {alignItems: 'center', justifyContent: 'center'}}>
                <Icon name='calendar' size={32} color={Theme.Colors.white} style={{ marginBottom: 2, marginRight: 1 }}/>
              </View>
            ) 
          }
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
