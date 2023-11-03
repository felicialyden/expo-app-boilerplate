import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';

export default function SettingsScreen() {
  const urls = [
    'https://www.loveandlemons.com/homemade-pasta-recipe/',
    'https://recept.se/recept/lattbakat-lantbrod',
  ];
  const [url, setUrl] = useState('');

  const fetchUrl = async () => {
    try {
      const res = await fetch('http://localhost:8000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: urls[0],
        }),
      });
      const result = await res.json();
      console.log(result);
    } catch (error) {
      console.log('FETCH FAILED: ');
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <TextInput value={url} onChangeText={setUrl} />
      <Button style={styles.button} onPress={fetchUrl} mode="contained">
        Fetch
      </Button>
      <Button
        style={styles.button}
        onPress={() => router.replace('/')}
        mode="contained"
      >
        Logout
      </Button>
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
  button: {
    margin: 20,
  },
});
