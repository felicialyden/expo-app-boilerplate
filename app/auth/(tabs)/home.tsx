import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Platform,
} from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { router } from 'expo-router';
import { useContext, useState } from 'react';
import StoreContext from '../../../context/store';

export default function HomeScreen() {
  const [value, setValue] = useState('');
  const { setQrData } = useContext(StoreContext);

  const handleQr = () => {
    // set qr data to global state so it can be used in /qrCode page
    setQrData(value);
    setValue('');
    router.push('/modal');
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
          placeholder="Enter text here.."
          value={value}
          multiline={true}
          numberOfLines={10}
          mode="outlined"
          style={styles.input}
          onChangeText={setValue}
        />
        <Button
          style={styles.button}
          mode="contained"
          onPress={handleQr}
          disabled={value.length === 0}
        >
          Generate QR image
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
