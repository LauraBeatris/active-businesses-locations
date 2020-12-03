import Head from 'next/head'

import seoConfig from 'config/seo'

const Main = () => (
  <Head>
    <title>{seoConfig.title}</title>
  </Head>
)

export default Main
