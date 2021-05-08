import 'tailwindcss/tailwind.css'
import '../styles/index.css'
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>EnterNet</title>
      <link rel="icon" href="globo.svg" />
    </Head>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
