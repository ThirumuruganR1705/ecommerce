import '@/styles/globals.css';
import newContext from '@/Context';
import { useState } from 'react';

export default function App({ Component, pageProps:{...pageProps} }) {

  const [values,setValues] = useState({
    email:"",
    isloggedIn:false
  });

  return <newContext.Provider value={[values,setValues]}>
    <Component {...pageProps} />
  </newContext.Provider>
}
