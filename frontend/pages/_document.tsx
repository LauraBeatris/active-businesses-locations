import Document, {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'

class MyDocument extends Document {
  render (): JSX.Element {
    return (
      <Html lang='pt'>
        <Head>
          <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
          <link rel='icon' href='favicon.ico' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
