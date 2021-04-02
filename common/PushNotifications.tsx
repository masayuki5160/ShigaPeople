import messaging from '@react-native-firebase/messaging';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

export function subscribe(topic: string) {
  messaging()
  .subscribeToTopic(topic)
  .then(() => {
    console.log('Subscribed to topic!')
  });
}

export function unsubscribe(topic: string) {
  messaging()
  .unsubscribeFromTopic(topic)
  .then(() => {
    console.log('Unsubscribed fom the topic!')
  });
}