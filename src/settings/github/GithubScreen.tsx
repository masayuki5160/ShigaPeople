import React from 'react';
import WebView from 'react-native-webview';

export default function GithubScreen(props: any) {
  const url = 'https://github.com/masayuki5160/ShigaPeople';
  return <WebView source={{ uri: url }} style={{ marginTop: 0 }} />;
}
