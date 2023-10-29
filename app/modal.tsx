import { useContext } from 'react';
import { ImageURISource, StyleSheet, View, Share, Alert } from 'react-native';
import { Button, Text } from 'react-native-paper';
import StoreContext from '../context/store';
import QRCode from 'react-native-qrcode-svg';
import { router } from 'expo-router';

export default function ModalScreen() {
  const { qrData } = useContext(StoreContext);
  const placeholderQr = 'https://www.youtube.com/watch?v=HOtddbeaRgY';
  const logo = 'https://picsum.photos/200' as ImageURISource;

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your generated QR code</Text>
      {qrData && (
        <QRCode
          value={placeholderQr}
          logoBorderRadius={25}
          size={200}
          logo={logo}
          logoSize={50}
        />
      )}
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={onShare}>
          Share
        </Button>
        <Button mode="text" onPress={router.back}>
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
