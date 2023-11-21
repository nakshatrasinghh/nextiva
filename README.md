## Chat Application

This repository contains a simple chat application built using React Native and React Navigation.

### File Structure

- **App.tsx**: This is the entry point of the application. It wraps the entire app within the `NavigationContainer` provided by React Navigation and uses the `AuthNavigator` component to handle authentication-related navigation.

- **src/navigator/index.tsx**: This file contains the `AuthNavigator` component responsible for managing the navigation flow within the app. It utilizes `createNativeStackNavigator` from React Navigation to define a stack navigator with screens for the Splash and Chat components.

- **src/features/SplashScreen.tsx**: This file defines the `SplashScreen` component. It presents a simple screen with a button to navigate to the chat interface.

- **src/features/ChatScreen.tsx**: The `ChatScreen` component represents the chat interface. It displays a list of messages and provides functionality to send new messages.

- **src/components/ChatComponent.tsx**: This file contains the `ChatComponent` reusable component used within the `ChatScreen`. It handles the rendering of messages, input for sending messages, and the overall chat UI.

### Flow Overview

1. **App Start**: The application starts with `App.tsx`, rendering the `NavigationContainer` wrapping the `AuthNavigator`.

2. **AuthNavigator**: `AuthNavigator` manages authentication-related navigation. It sets up a stack navigator with two screens: `Splash` and `Chat`.

3. **SplashScreen**: Initially, the app lands on the `SplashScreen`, displaying a button to open the chat.

4. **ChatScreen**: Upon pressing the button, the app navigates to the `ChatScreen`, which displays the chat interface.

5. **ChatComponent**: The core UI of the chat is handled by `ChatComponent`. It renders messages, provides an input field to send new messages, and maintains the state for managing messages.

### Usage

To run the application:

1. Make sure you have the necessary development environment set up for React Native.
2. Clone this repository.
3. Install dependencies using `npm install` or `yarn install`.
4. Run the app using `npm start` or `yarn start`.

### Additional Notes

- **Message Structure**: Messages are objects containing an ID, text content, and a boolean flag indicating if the message was sent or received.
- **Automated Messages**: There's a commented-out block in `ChatScreen` that demonstrates how to send automated messages every 30 seconds.
- **Styling**: The UI is styled using React Native's StyleSheet with components like `TextInput`, `FlatList`, and `TouchableOpacity`.

--- 
