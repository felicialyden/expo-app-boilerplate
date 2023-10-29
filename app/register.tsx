import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-paper';

export default function RegisterPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register with</Text>
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => console.log('clicked')}
      >
        Google
      </Button>
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => console.log('clicked')}
      >
        Apple
      </Button>
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => console.log('clicked')}
      >
        Facebook
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
  subTitle: {
    fontSize: 16,
    marginTop: 100,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    minWidth: 120,
  },
});
