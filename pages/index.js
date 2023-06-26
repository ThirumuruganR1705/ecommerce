import newContext from '@/Context';
import { useRouter } from 'next/router';
import { useContext } from 'react';

export default function Home() {

  const router = useRouter();
  const [values,setValues] = useContext(newContext);

  const clickHandler=()=>{
    if(values.isloggedIn){
      setValues({email:"",isloggedIn:false});
    }else{
      router.push("/login");
    }
  }
  
  return (
      <div>
        <button onClick={() => { clickHandler() }}>{values.isloggedIn?"Logout":"Login"}</button>
      </div>
  )

}
