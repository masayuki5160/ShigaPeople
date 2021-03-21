import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import ShigaHomeScreen from './Shiga/ShigaHomeScreen';

export default function App() {
  return (
    <PaperProvider>
      <ShigaHomeScreen/>
    </PaperProvider>
  );
}