import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import ShigaHomeScreen from './Shiga/ShigaHomeScreen';
import OtsuHomeScreen from './Otsu/OtsuHomeScreen';

export default function App() {
  return (
    <PaperProvider>
      <OtsuHomeScreen/>
    </PaperProvider>
  );
}