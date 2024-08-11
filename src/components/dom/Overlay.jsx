import { Children, useState } from 'react'
import { motion } from 'framer-motion'
import { useStore } from '../../store'
import { Anchor, Select, Stack, Text } from '@mantine/core'
import { IconPlus, IconVolume } from '@tabler/icons-react'
import { useMediaQuery } from '@mantine/hooks'

const decalUrlOptions = [
  {
    value: '/sysco.png',
    label: 'Sysco',
  },
  { value: '/hortons.png', label: 'D.R. Horton' },
  { value: '/chuck-e-cheese.png', label: 'Chuck-E-Cheese' },
]

const materialOptions = [
  { value: 'default', label: 'Default' },
  {
    value: 'pink',
    label: 'Glossy Pink',
  },
  { value: 'flow', label: 'Transparent Purple Flow' },
]

const container = {
  hidden: { pointerEvents: 'none', opacity: 0, height: 0, transition: { staggerChildren: 0.05 } },
  show: {
    opacity: 1,
    height: 'auto',
    transition: { when: 'beforeChildren', staggerChildren: 0.05 },
  },
}
const item = {
  hidden: { pointerEvents: 'none', opacity: 0, y: '-100%' },
  show: { opacity: 1, y: 0 },
}
const instantExitItem = {
  hidden: { opacity: 0, y: '-100%', transition: { duration: 0 } },
  show: { opacity: 1, y: 0 },
}

function List({ children, open, instantExit }) {
  const animationVariant = instantExit ? instantExitItem : item

  return (
    <motion.ul variants={container} initial='hidden' animate={open ? 'show' : 'hidden'}>
      {Children.map(children, (child) => (
        <li>
          <motion.div variants={animationVariant}>{child}</motion.div>
        </li>
      ))}
    </motion.ul>
  )
}

export function Overlay() {
  const [material, setMaterial] = useState()
  const [decalUrl, setDecalUrl] = useState()
  const store = useStore()
  const isViewportSmall = useMediaQuery('(max-width: 767px)')

  return (
    <>
      <div
        style={{
          pointerEvents: store.entered ? 'none' : 'auto',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}>
        <div style={{ display: store.entered ? undefined : 'none' }}>
          {/* <a style={{ zIndex: 10, position: 'absolute', left: 40, fontSize: '14px' }}> */}
          <br />

          {isViewportSmall ? (
            <></>
          ) : (
            <div style={{ pointerEvents: 'auto', position: 'absolute', left: 40, fontSize: '14px' }}>
              <Stack spacing={0}>
                <Text size='xl' fw={900} variant='gradient' gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>
                  Michael Perros
                </Text>

                <Anchor color='white' href={'https://perros.dev'} target='_blank'>
                  Site
                </Anchor>
                <Anchor color='white' href={'https://www.github.com/michaelperros'} target='_blank'>
                  GitHub
                </Anchor>
                <Anchor color='white' href={'mailto:michael@perros.dev'}>
                  Email
                </Anchor>
              </Stack>
            </div>
          )}

          <a
            style={{
              pointerEvents: 'auto',
              position: 'absolute',
              top: 28,
              right: 40,
            }}>
            {/* top right overlay */}
            <Stack>
              <Select
                radius={0}
                styles={{ label: { fontSize: 16, fontWeight: 700, color: '#000' } }}
                label='Decals'
                defaultValue='/sysco.png'
                value={decalUrl}
                onChange={(newUrl) => {
                  setDecalUrl(newUrl)
                  store.decalUrl = newUrl
                }}
                data={decalUrlOptions}
              />
              <Select
                radius={0}
                styles={{ label: { fontSize: 16, fontWeight: 700, color: '#000' } }}
                label='Materials'
                defaultValue='default'
                value={material}
                onChange={(material) => {
                  setMaterial(material)
                  store.material = material
                }}
                data={materialOptions}
              />
            </Stack>
          </a>
        </div>
      </div>
    </>
  )
}
