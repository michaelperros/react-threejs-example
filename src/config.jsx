import Head from 'next/head'

const titleDefault = 'React Three.js Demo'
const url = ''
const description = ''
const author = 'Michael Perros'
const designer = 'Michael Perros'
const publisher = 'Michael Perros'

export default function Header({ title = titleDefault }) {
  return (
    <Head>
      {/* Recommended Meta Tags */}
      <meta charSet='utf-8' />
      <meta name='language' content='english' />
      <meta httpEquiv='content-type' content='text/html' />
      <meta name='author' content={author} />
      <meta name='designer' content={designer} />
      <meta name='publisher' content={publisher} />
      {/* Search Engine Optimization Meta Tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content='Music, Zphrisms, Arturo Holmes' />
      <meta name='robots' content='index,follow' />
      <meta name='distribution' content='web' />
      <meta property='og:title' content={title} />
      <meta property='og:type' content='site' />
      <meta property='og:url' content={url} />
      <meta property='og:site_name' content={title} />
      <meta property='og:description' content={description} />
      {/* Meta Tags for HTML pages on Mobile */}
      {/* <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/>  */}
      <meta name='viewport' content='width=device-width, minimum-scale=1, initial-scale=1.0' />
      <meta name='theme-color' content='#000' />
      {/* <link rel='shortcut icon' href='/icons/favicon.ico' /> */}
      <link rel='shortcut icon' href='/favicon.ico' />
      {/* Apple Touch Icon */}
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      {/* Android Chrome Icons */}
      <link rel='icon' type='image/png' sizes='192x192' href='/android-chrome-192x192.png' />
      <link rel='icon' type='image/png' sizes='512x512' href='/android-chrome-512x512.png' />
      {/* Other Favicons */}
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      {/* Web App Manifest */}
      <link rel='manifest' href='/site.webmanifest' />
      <link
        rel='prefetch'
        crossorigin='anonymous'
        href='https://www.gstatic.com/draco/versioned/decoders/1.5.6/draco_wasm_wrapper.js'
      />
      <link
        rel='prefetch'
        crossorigin='anonymous'
        href='https://www.gstatic.com/draco/versioned/decoders/1.5.6/draco_decoder.wasm'
      />
    </Head>
  )
}
