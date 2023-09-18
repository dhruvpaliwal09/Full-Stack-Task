import { Html, Head, Main, NextScript } from 'next/document'
import Header from './components/Header'
// import Footer from './components/Footer'
export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Dosis:wght@500&family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Header/>
        <Main />
        <NextScript />
        {/* <Footer/> */}
      </body>
    </Html>
  )
}
