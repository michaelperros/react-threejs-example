import { useRef } from 'react'
import Header from '@/config'
import dynamic from 'next/dynamic'
import Layout from '@/components/dom/Layout'
import { Overlay } from '@/components/dom/Overlay'
import { useStore } from '@/store'
import { useProgress } from '@react-three/drei'

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false })
const Loader = dynamic(() => import('@react-three/drei').then((mod) => mod.Loader), { ssr: false })

export default function App({ Component, pageProps = { title: 'index' } }) {
  const ref = useRef()
  const store = useStore()
  const { progress } = useProgress()

  if (progress === 100) {
    store.loaded = true
  }
  return (
    <>
      <style jsx global>
        {`
          @font-face {
            font-family: 'GT-Bold';
            src: url('/GT-Walsheim-Bold') format('truetype');
          }
        `}
      </style>
      <Header title={pageProps.title} />
      <Layout ref={ref}>
        <Component {...pageProps} />
        {Component?.canvas && (
          <>
            <Scene className='pointer-events-none' eventSource={ref} eventPrefix='client'>
              {Component.canvas(pageProps)}
            </Scene>
            <Overlay />
            <Loader
              containerStyles={{ background: 'transparent' }}
              initialState={(active) => (store.loading = active)}
            />
          </>
        )}
      </Layout>
    </>
  )
}
