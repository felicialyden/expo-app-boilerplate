import { StyleSheet, View, useColorScheme } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function LoginPage() {
  const darkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar style={darkMode ? 'light' : 'dark'} />
      <Text style={styles.title}>LOGIN</Text>
      <Link href="/auth/(tabs)/home" replace>
        Login
      </Link>
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
    fontSize: 20,
    fontWeight: 'bold',
  },
});
