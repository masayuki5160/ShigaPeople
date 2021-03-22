import React from 'react';
import WebView from "react-native-webview";

export default function ShigaNewsWebViewScreen() {
    return(
        <WebView source={{uri: 'https://yahoo.co.jp'}} style={{marginTop: 20}}/>
    );
}