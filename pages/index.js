import { useRouter } from 'next/router';
import { useState } from 'react';
import newContext from '@/Context';

export default function Home() {

  const router = useRouter();
  const [values,setValues] = useState({
    email:"",
    isloggedIn:false
  });
  return (
    <newContext.Provider value={[values,setValues]}>
      <div>
        <button onClick={() => { router.push("/login") }}>Login</button>
      </div>
    </newContext.Provider>
  )

}
