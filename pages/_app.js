import '../styles/globals.css'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Talikasih</title>
        <meta name="description" content="Portal pengadukan bencana alam." />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );

}

export default MyApp
