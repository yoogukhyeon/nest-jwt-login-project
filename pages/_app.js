import '../styles/globals.css'
import Head from "next/head"
import { useEffect } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie';

function MyApp({ Component, pageProps }) {

  //받아온 토큰값 Bearer 토큰값으로 서버에 보내주기
  useEffect( ()=> {
    const cookies = new Cookies();
    const token = cookies.get('cdt');
    console.log(`token : ${token}`);
    axios('/api/auth', {
      'method' : 'get',
      'headers' : {
        'Authorization' : `Bearer ${token}`
      }            
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err);
    })
  }, []);

  return <>
      <Head>
        <title>sample project</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" />
      
      </Head>
  
      <Component {...pageProps} />
  </>
  
  

}

export default MyApp
