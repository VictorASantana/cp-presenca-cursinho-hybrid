import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '@src/modules/home/home.page';
import Menu from '@src/modules/menu/menu.page';
import { Metrics } from '@src/modules/metrics/metrics.page';
import { Signin } from '@src/modules/auth/signin.page';
import { Theme } from 'assets/theme/theme';
import { GestureResponderEvent, StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { Schedule } from '@src/modules/schedule/schedule.page';
import { Profile } from '@src/modules/profile/profile.page';
import { useEffect, useRef } from 'react';
import * as Animatable from 'react-native-animatable';
import { useAuth } from '@src/context/auth.context';
import { Subject } from '@src/modules/subjects/subjects.page';

export type RootStackParamsList = {
  Home?: undefined;
  Profile?: undefined;
  Menu?: undefined;
  Metrics?: undefined;
  Signin?: undefined;
  Schedule?: undefined;
  Subjects?: undefined;
  Tabs?: undefined;
};

interface TabButtonProps {
  label: string;
  icon: string;
  onPress: ((e: GestureResponderEvent) => void) | undefined;
  selected: boolean;
}

export type ScreenProps<T extends keyof RootStackParamsList> =
  NativeStackScreenProps<RootStackParamsList, T>;

const Stack = createNativeStackNavigator<RootStackParamsList>();
const Tab = createBottomTabNavigator<RootStackParamsList>();

const animate1 = { 0: { scale: 0.5, translateY: 7 }, 0.7: { translateY: -34 }, 1: { scale: 1.2, translateY: -24 } };
const animate2 = { 0: { scale: 1.2, translateY: -10 }, 0.7: { scale: 1, translateY: 7 } };

const circle1 = { 0: { scale: 0 }, 0.3: { scale: 0.9 }, 0.5: { scale: 0.2 }, 0.8: { scale: 0.7 }, 1: { scale: 1 } };
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } };

const TabButton: React.FC<TabButtonProps> = ({ onPress, selected, label, icon }) => {
  const focused = selected;
  const viewRef = useRef<Animatable.View>(null);
  const circleRef = useRef<Animatable.View>(null);
  const textRef = useRef<Animatable.Text>(null);

  const color = Theme.Colors.white;
  const bgColor = Theme.Colors.primary;

  useEffect(() => {
    if (focused) {
      viewRef.current?.animate(animate1);
      circleRef.current?.animate(circle1);
      textRef.current?.transitionTo({ scaleX: 1 });
    } else {
      viewRef.current?.animate(animate2);
      circleRef.current?.animate(circle2);
      textRef.current?.transitionTo({ scaleX: 0 });
    }
  }, [focused]);

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={1} style={styles.container}>
      <Animatable.View ref={viewRef} duration={700} style={styles.container}>
        <View style={[styles.btn, { borderColor: focused ? Theme.Colors.white : bgColor, backgroundColor: bgColor }]}>
          <Animatable.View ref={circleRef} style={styles.circle} />
          <Icon name={icon} color={Theme.Colors.white} size={focused ? 20 : 30}/>
        </View>
        <Animatable.Text ref={textRef} style={[styles.text, { color }]}>
          {label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  )
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
        initialRouteName='Home'
        screenOptions={() => ({
          tabBarHideOnKeyboard: true,
          tabBarLabel: () => null,
          tabBarStyle: {
            position: 'absolute',
            bottom: 20,
            left: 20, 
            right: 20,
            backgroundColor: Theme.Colors.primary, 
            borderTopColor: 'transparent', 
            height: 80,
            borderRadius: Theme.Spacing.medium,
            ...styles.shadow,
          },
        })}
      >
        <Tab.Screen name='Menu' component={Menu} options={{
          headerShown: false,
          tabBarButton: (props) => (
            <TabButton onPress={props.onPress} selected={props.accessibilityState?.selected ?? false} icon={'menu'} label='Menu'/>
          ),    
        }}/>
        <Tab.Screen name='Home' component={Home} options={{
          headerShown: false,
          tabBarButton: (props) => (
            <TabButton onPress={props.onPress} selected={props.accessibilityState?.selected ?? false} icon={'home'} label='Home'/>
          ),    
        }}/>
        <Tab.Screen name='Subjects' component={Subject} options={{
          headerShown: false,
          tabBarButton: (props) => (
            <TabButton onPress={props.onPress} selected={props.accessibilityState?.selected ?? false} icon={'book'} label='Disciplinas'/>
          ),    
        }}/>
      </Tab.Navigator>
  )
}

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Tabs' component={TabNavigator} options={() => ({
        headerShown: false,
      })}/>
      <Stack.Screen name='Profile' component={Profile} options={() => ({
        headerShown: false,
      })}/>
      <Stack.Screen name='Metrics' component={Metrics} options={() => ({
        headerShown: false,
      })}/>
      <Stack.Screen name='Schedule' component={Schedule} options={() => ({
        headerShown: false,
      })}/>
    </Stack.Navigator>
  )
}


export const Routes = () => {
  const {authData} = useAuth();

  return (
    <NavigationContainer>
      {!authData?.token ? 
        <Stack.Navigator>
          <Stack.Screen name='Signin' component={Signin} options={() => ({
            headerShown: false,
            animationTypeForReplace: 'push',
          })}/>
        </Stack.Navigator> :
        <AppStack />
      }
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: Theme.Colors.primary, 
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2, 
    shadowRadius: 3.5,
    elevation: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: Theme.Colors.white,
    backgroundColor: Theme.Colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.Colors.secondary,
    borderRadius: 25,
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    color: Theme.Colors.primary,
    fontWeight: '500'
  }
});
