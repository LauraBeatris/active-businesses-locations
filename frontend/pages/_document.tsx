import Document, {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'

class MyDocument extends Document {
  render (): JSX.Element {
    return (
      <Html lang='pt' className='antialiased p-0 mx-0 outline-none box-border'>
        <Head>
          <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
          <link rel='icon' href='favicon.ico' />
        </Head>
        <body className='font-body min-w-screen'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
