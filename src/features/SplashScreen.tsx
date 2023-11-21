import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {AuthStackParams} from '../navigator';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';

export type SplashScreenProps = NativeStackScreenProps<
  AuthStackParams,
  'Splash'
>;

const SplashScreen = (props: SplashScreenProps) => {
  const {navigation} = props;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Chat');
        }}
        style={styles.button}>
        <Text>Open Chat</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#e4e4e4',
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
