import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CloseX from '../svgs/CloseX';

export interface Message {
  id: number;
  text: string;
  isSent: boolean;
}

interface ChatProps {
  messages: Message[];
  onSend?: (message: Message) => void;
  headerBgColor?: string;
  headerTitle?: string;
  cancel?: () => void;
}

const ChatComponent = (props: ChatProps) => {
  const {
    messages: initialMessages = [],
    onSend,
    headerBgColor = 'white',
    headerTitle = 'Title',
    cancel,
  } = props;

  const [inputText, setInputText] = useState<string>('');
  const [allMessages, setAllMessages] = useState<Message[]>([]);

  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const uniqueInitialMessages = initialMessages.filter(
      msg => !allMessages.find(existingMsg => existingMsg.id === msg.id),
    );

    setAllMessages(prevMessages => [...prevMessages, ...uniqueInitialMessages]);
    setMessages(prevMessages => [...prevMessages, ...uniqueInitialMessages]);
  }, [initialMessages]);

  const flatListRef = useRef<FlatList<Message>>(null);

  const renderMessage = ({item}: {item: Message}) => {
    const messageStyle = item.isSent
      ? styles.sentMessage
      : styles.receivedMessage;

    return (
      <View style={[styles.messageContainer, messageStyle]} key={item.id}>
        <Text>{item.text}</Text>
      </View>
    );
  };

  const sendMessage = () => {
    if (inputText.trim() === '') {
      return;
    }

    const newMessage: Message = {
      id: allMessages.length + 1,
      text: inputText.trim(),
      isSent: true,
    };

    setAllMessages(prevMessages => [...prevMessages, newMessage]);
    setMessages(prevMessages => [...prevMessages, newMessage]);
    setInputText('');
    onSend && onSend(newMessage);

    flatListRef.current?.scrollToEnd();
  };

  const handleCancel = () => {
    cancel && cancel();
  };

  return (
    <>
      <View
        style={[
          styles.headerContainer,
          {
            backgroundColor: headerBgColor ? headerBgColor : 'white',
          },
        ]}>
        <View style={styles.innerHeaderContainer}>
          <TouchableOpacity onPress={handleCancel}>
            <CloseX />
          </TouchableOpacity>
          <Text style={{textAlign: 'center', flex: 1}}>{headerTitle}</Text>
          <View style={{width: 36}} />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a message..."
            value={inputText}
            placeholderTextColor={'#999'}
            onEndEditing={sendMessage}
            onChangeText={text => setInputText(text)}
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          ref={flatListRef}
          data={messages.slice().reverse()}
          renderItem={renderMessage}
          keyExtractor={item => item.id.toString()}
          style={styles.messagesContainer}
          inverted
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: '#d5d5d5',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  innerHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    marginTop: 8,
  },
  messagesContainer: {
    flex: 1,
    padding: 8,
  },
  messageContainer: {
    padding: 8,
    marginVertical: 4,
    maxWidth: '80%',
    borderRadius: 8,
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E5E5EA',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#DDD',
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  input: {
    flex: 1,
    minHeight: 48,
    maxHeight: 100,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  sendButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#007BFF',
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default ChatComponent;
