import "../styles/index.scss"; 
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/globals.css'; // If you have other global styles

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
