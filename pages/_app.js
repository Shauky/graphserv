import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
