import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Platform,
} from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { router } from 'expo-router';
import { useState } from 'react';

export default function HomeScreen() {
  const [value, setValue] = useState('');

  const handleQr = () => {
    // set qr data to global state so it can be used in /qrCode page
    setValue('');
    router.push('/qr');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Text style={styles.description}>
          Input the text you'd like the QR image to encode.
        </Text>
        <TextInput
          multiline={true}
          numberOfLines={10}
          mode="outlined"
          style={styles.input}
          onChangeText={setValue}
        />
        <Button
          style={styles.button}
          mode="contained-tonal"
          onPress={() => router.replace('/auth/(tabs)/home')}
        >
          <Text>Generate qr image</Text>
        </Button>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    margin: 20,
  },
  input: {
    margin: 20,
    minWidth: 200,
    height: 200,
  },
  description: {
    textAlign: 'center',
    alignSelf: 'center',
    margin: 20,
    maxWidth: 200,
  },
});
