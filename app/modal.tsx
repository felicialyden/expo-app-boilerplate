import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import StoreContext from '../context/store';
import QRCode from 'react-native-qrcode-svg';

export default function ModalScreen() {
  const { qrData } = useContext(StoreContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your generated QR code</Text>
      {qrData && <QRCode value={qrData} />}
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={() => console.log('2')}>
          Share
        </Button>
        <Button mode="text" onPress={() => console.log('1')}>
          Generate new code{' '}
        </Button>
      </View>
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
    padding: 40,
    fontWeight: 'bold',
  },
  buttonContainer: {
    margin: 40,
    gap: 10,
  },
});
