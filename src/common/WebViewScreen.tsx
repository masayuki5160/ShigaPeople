import React from 'react';
import WebView from 'react-native-webview';

export default function WebViewScreen(props: any) {
  const url = props.route.params.url;
  return <WebView source={{ uri: url }} style={{ marginTop: 0 }} />;
}
