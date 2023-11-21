import React, {useState} from 'react';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
import {AuthStackParams} from '../navigator';
import {SafeAreaView} from 'react-native';
import ChatComponent, {Message} from '../components/ChatComponent';

export type ChatScreenProps = NativeStackScreenProps<AuthStackParams, 'Chat'>;

const ChatScreen = (props: ChatScreenProps) => {
  const {navigation} = props;

  const [messages, setMessages] = useState<Message[]>([
    {id: 1, text: 'Hello!', isSent: false},
    {id: 2, text: 'Hi there!', isSent: true},
  ]);

  /** Uncomment this to send automated messages every 30 seconds **/
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const newMessage: Message = {
  //       id: messages.length + 1,
  //       text: `Automated message sent at ${new Date().toLocaleTimeString()}`,
  //       isSent: false,
  //     };
  //     setMessages(prevMessages => [...prevMessages, newMessage]);
  //   }, 30000);
  //
  //   return () => clearInterval(interval);
  // }, [messages]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ChatComponent messages={messages} />
    </SafeAreaView>
  );
};

export default ChatScreen;
