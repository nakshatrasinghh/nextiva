import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './features/SplashScreen';
import ChatScreen from './features/ChatScreen';

export type AuthStackParams = {
  Splash: undefined;
  Chat: undefined;
};

const AuthNavigator = () => {
  const AuthStack = createNativeStackNavigator<AuthStackParams>();

  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#fff',
        },
      }}
      initialRouteName={'Splash'}>
      <AuthStack.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          gestureEnabled: false,
        }}
      />
      <AuthStack.Screen name="Chat" component={ChatScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
