import { StyleSheet, View, useColorScheme } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { router, Link} from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function LoginPage() {
  const darkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar style={darkMode ? 'light' : 'dark'} />
      <Text style={styles.title}>Welcome</Text>
      <Button
        style={styles.button}
        mode="contained-tonal"
        onPress={() => router.replace('/auth/(tabs)/home')}
      >
        <Text>Login</Text>
      </Button>
      <Link href="/register">Register</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    marginBottom: 100,
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    margin: 20,
  },
});
