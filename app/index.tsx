import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Platform,
  useColorScheme,
} from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';
import { router, Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

export default function LoginPage() {
  const darkMode = useColorScheme() === 'dark';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style={darkMode ? 'light' : 'dark'} />
      <Text style={styles.title}>Welcome</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TextInput
          mode="outlined"
          label="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={setPassword}
        />
        <Link style={styles.forgotPassword} href="/forgotPassword">
          Forgot password?
        </Link>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => router.replace('/auth/(tabs)/home')}
        >
          Login
        </Button>
      </KeyboardAvoidingView>
      <Text style={styles.divider}>or</Text>
      <Button style={styles.button} mode="contained-tonal">
        <Link href="/register">Register</Link>
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    marginVertical: 10,
  },
  title: {
    marginBottom: 100,
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    marginBottom: 100,
    fontSize: 20,
    fontWeight: 'bold',
  },

  forgotPassword: {
    marginLeft: 100,
    fontStyle: 'italic',
    color: 'grey',
    marginBottom: 40,
    fontSize: 12,
  },
  button: {
    width: 209,
  },
});
