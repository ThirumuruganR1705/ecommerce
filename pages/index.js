import { Inter } from 'next/font/google';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import axios from 'axios';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { data: session } = useSession();
  const router = useRouter();
  const fetch = async () => {
    try {
      const response = await axios.get('https://aliexpress-datahub.p.rapidapi.com/item_detail?itemId=3256804591426248', {
        headers: {
          'X-RapidAPI-Key': '6b6510f000mshafe4f83d7f89c8cp1bc62cjsnc5768ccf27eb',
          'X-RapidAPI-Host': 'aliexpress-datahub.p.rapidapi.com'
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetch();
  }, [])

  if (session) {
    return (
      <div>{session.user.name}</div>
    )
  }
  else {
    return (
      <div className='bg-blue-500 w-screen h-screen flex items-center justify-center'>
        <h2 className='bg-white p-2 rounded-lg cursor-pointer' onClick={() => { router.push("/login") }}>Login With Google</h2>
      </div>
    )
  }
}
