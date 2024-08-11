/*

License: SKETCHFAB Editorial (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/ford-transit-custom-l1h2-2020-91735f3ef94f485a92f8d51d877ba7a5
Title: Ford Transit Custom L1H2 2020
*/

import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useGLTF, useAnimations, Decal, useTexture, Box } from '@react-three/drei'
import * as THREE from 'three'
import { NodeToyMaterial } from './NodeToy'
import { useStore } from '@/store'

// purple hexagons 'https://dev-draft.nodetoy.co/1JrV1CcXr6Hrs8te'
// gold  'https://draft.nodetoy.co/RodFRN5IYIYclwts'
export default function Truck(props) {
  const group = useRef()

  const { nodes, materials, animations } = useGLTF(
    'https://cdn.sanity.io/files/60rx43mw/production/07e153efc4e50a9b3c98e25028888fc087c58e48.glb',
  )

  const { actions } = useAnimations(animations, group)
  const store = useStore()

  const sideDoorRef = useRef()
  const rfDoorRef = useRef()

  const [decalUrl, setDecalUrl] = useState('')
  const [nodeToyUrl, setNodeToyUrl] = useState(null)

  const decalScale = [150, 150, 150]
  const decalPosition = [-120, 0, 137]

  // update decal
  useEffect(() => {
    console.log(store.decalUrl)
    setDecalUrl(store.decalUrl)
  }, [store.decalUrl])

  useEffect(() => {
    console.log(store.material)
    if (store.material == 'pink') {
      setNodeToyUrl('https://draft.nodetoy.co/rFZQtk0wlh3k3B4Q')
    }
    if (store.material == 'flow') {
      setNodeToyUrl('https://dev-draft.nodetoy.co/1JrV1CcXr6Hrs8te')
    }
    if (store.material == 'default') {
      setNodeToyUrl(null)
    }
  }, [store.material])

  let isOpen = false

  const handleClick = () => {
    actions['Take 001'].setLoop(THREE.LoopOnce)
    actions['Take 001'].clampWhenFinished = true

    if (isOpen) {
      actions['Take 001'].timeScale = -1
      actions['Take 001'].paused = false
      actions['Take 001'].play()

      isOpen = false
    } else {
      actions['Take 001'].timeScale = 1
      actions['Take 001'].paused = false
      actions['Take 001'].play()
      isOpen = true
    }
  }
  const texture = useTexture(decalUrl ? decalUrl : '/sysco.png')

  return (
    <group onClick={handleClick} ref={group} {...props} dispose={null}>
      <group name='Sketchfab_Scene'>
        <group name='Sketchfab_model' rotation={[-Math.PI / 2, 0, 0]}>
          <group name='d69d3f135bcd46c491acde84f8e26e2ffbx' rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name='Object_2'>
              <group name='RootNode'>
                <group name='LF_WHEEL' position={[107.1, 43.08, 192.43]} rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh
                    name='LF_WHEEL_FTC_Wheels_0'
                    geometry={nodes.LF_WHEEL_FTC_Wheels_0.geometry}
                    material={materials.FTC_Wheels}
                  />
                </group>
                <group name='RF_WHEEL' position={[-107.1, 43.08, 192.43]} rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh
                    name='RF_WHEEL_FTC_Wheels_0'
                    geometry={nodes.RF_WHEEL_FTC_Wheels_0.geometry}
                    material={materials.FTC_Wheels}
                  />
                </group>
                <group name='Hood' position={[0, 169.94, 223.93]} rotation={[-Math.PI / 2, 0, 0]}>
                  <group name='Object_20' position={[0, 223.93, -169.94]}>
                    <mesh name='Hood_FTC_Base_0' geometry={nodes.Hood_FTC_Base_0.geometry}>
                      {nodeToyUrl && <NodeToyMaterial url={nodeToyUrl} />}
                    </mesh>
                  </group>
                </group>
                <group name='RR_DOOR' position={[-106.75, 156.93, -295.73]} rotation={[-Math.PI / 2, 0, 0]}>
                  <group name='Object_23' position={[106.75, -295.73, -156.93]}>
                    <mesh
                      name='RR_DOOR_FTC_Base_0'
                      geometry={nodes.RR_DOOR_FTC_Base_0.geometry}
                      material={materials.FTC_Base}>
                      {nodeToyUrl && <NodeToyMaterial url={nodeToyUrl} />}
                    </mesh>
                    <mesh
                      name='RR_DOOR_FTC_Lights_0'
                      geometry={nodes.RR_DOOR_FTC_Lights_0.geometry}
                      material={materials.FTC_Lights}
                    />
                    <mesh
                      name='RR_DOOR_FTC_Interior_0'
                      geometry={nodes.RR_DOOR_FTC_Interior_0.geometry}
                      material={materials.FTC_Interior}
                    />
                  </group>
                </group>
                <group name='LR_DOOR' position={[106.75, 156.93, -295.73]} rotation={[-Math.PI / 2, 0, 0]}>
                  <group name='Object_28' position={[-106.75, -295.73, -156.93]}>
                    <mesh
                      name='LR_DOOR_FTC_Base_0'
                      geometry={nodes.LR_DOOR_FTC_Base_0.geometry}
                      material={materials.FTC_Base}>
                      {nodeToyUrl && <NodeToyMaterial url={nodeToyUrl} />}
                    </mesh>
                    <mesh
                      name='LR_DOOR_FTC_Lights_0'
                      geometry={nodes.LR_DOOR_FTC_Lights_0.geometry}
                      material={materials.FTC_Lights}
                    />
                    <mesh
                      name='LR_DOOR_FTC_Interior_0'
                      geometry={nodes.LR_DOOR_FTC_Interior_0.geometry}
                      material={materials.FTC_Interior}
                    />
                  </group>
                </group>
                <group name='LF_DOOR' position={[117.24, 135.85, 175.27]} rotation={[-Math.PI / 2, 0, 0]}>
                  <group name='Object_33' position={[-117.24, 175.27, -135.85]}>
                    <mesh
                      name='LF_DOOR_FTC_Base_0'
                      geometry={nodes.LF_DOOR_FTC_Base_0.geometry}
                      material={materials.FTC_Base}>
                      {' '}
                      {nodeToyUrl && <NodeToyMaterial url={nodeToyUrl} />}
                    </mesh>
                    <mesh
                      name='LF_DOOR_FTC_Lights_0'
                      geometry={nodes.LF_DOOR_FTC_Lights_0.geometry}
                      material={materials.FTC_Lights}
                    />
                    <mesh
                      name='LF_DOOR_FTC_Interior_0'
                      geometry={nodes.LF_DOOR_FTC_Interior_0.geometry}
                      material={materials.FTC_Interior}
                    />
                    <mesh
                      name='LF_DOOR_FTC_Glass_0'
                      geometry={nodes.LF_DOOR_FTC_Glass_0.geometry}
                      material={materials.FTC_Glass}
                    />
                  </group>
                </group>
                <group name='SIDE_DOOR' rotation={[-Math.PI / 2, 0, 0]}>
                  <Decal
                    // debug
                    map={texture}
                    scale={decalScale}
                    position={decalPosition}
                    rotation={[0, -5 / Math.PI, -5 / Math.PI]}
                    mesh={sideDoorRef}>
                    <mesh
                      ref={sideDoorRef}
                      name='SIDE_DOOR_FTC_Base_0'
                      geometry={nodes.SIDE_DOOR_FTC_Base_0.geometry}
                      material={materials.FTC_Base}>
                      {' '}
                      {nodeToyUrl && <NodeToyMaterial url={nodeToyUrl} />}
                    </mesh>
                  </Decal>
                  <mesh
                    name='SIDE_DOOR_FTC_Lights_0'
                    geometry={nodes.SIDE_DOOR_FTC_Lights_0.geometry}
                    material={materials.FTC_Lights}
                  />
                  <mesh
                    name='SIDE_DOOR_FTC_Interior_0'
                    geometry={nodes.SIDE_DOOR_FTC_Interior_0.geometry}
                    material={materials.FTC_Interior}
                  />
                </group>
                <group name='RF_DOOR' position={[-117.24, 135.85, 175.27]} rotation={[-Math.PI / 2, 0, 0]}>
                  <group name='Object_43' position={[117.24, 175.27, -135.85]}>
                    <mesh
                      name='RF_DOOR_FTC_Interior_0'
                      geometry={nodes.RF_DOOR_FTC_Interior_0.geometry}
                      material={materials.FTC_Interior}
                    />
                    <Decal
                      map={texture}
                      scale={decalScale}
                      position={decalPosition}
                      rotation={[0, -5 / Math.PI, -5 / Math.PI]}
                      mesh={rfDoorRef}>
                      <mesh
                        ref={rfDoorRef}
                        name='RF_DOOR_FTC_Base_0'
                        geometry={nodes.RF_DOOR_FTC_Base_0.geometry}
                        material={materials.FTC_Base}>
                        {nodeToyUrl && <NodeToyMaterial url={nodeToyUrl} />}
                      </mesh>
                    </Decal>
                    <mesh
                      name='RF_DOOR_FTC_Lights_0'
                      geometry={nodes.RF_DOOR_FTC_Lights_0.geometry}
                      material={materials.FTC_Lights}
                    />
                    <mesh
                      name='RF_DOOR_FTC_Glass_0'
                      geometry={nodes.RF_DOOR_FTC_Glass_0.geometry}
                      material={materials.FTC_Glass}
                    />
                  </group>
                </group>
                <group name='Steering_Wheel' position={[50.77, 172.75, 130.28]} rotation={[-1.01, 0, -Math.PI / 2]}>
                  <group name='Object_49' rotation={[0, 0, Math.PI / 2]}>
                    <mesh
                      name='Steering_Wheel_FTC_Interior_0'
                      geometry={nodes.Steering_Wheel_FTC_Interior_0.geometry}
                      material={materials.FTC_Interior}
                    />
                    <mesh
                      name='Steering_Wheel_FTC_Lights_0'
                      geometry={nodes.Steering_Wheel_FTC_Lights_0.geometry}
                      material={materials.FTC_Lights}
                    />
                  </group>
                </group>
                {/* <group name='Box001' rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh name='Box001_BASE_0' geometry={nodes.Box001_BASE_0.geometry} material={materials.BASE} />
                </group> */}
                <group name='FordTransitCustom' rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh
                    name='FordTransitCustom_FTC_Base_0'
                    geometry={nodes.FordTransitCustom_FTC_Base_0.geometry}
                    material={materials.FTC_Base}>
                    {nodeToyUrl && <NodeToyMaterial url={nodeToyUrl} />}{' '}
                  </mesh>
                  <mesh
                    name='FordTransitCustom_FTC_Lights_0'
                    geometry={nodes.FordTransitCustom_FTC_Lights_0.geometry}
                    material={materials.FTC_Lights}
                  />
                  <mesh
                    name='FordTransitCustom_FTC_Interior_0'
                    geometry={nodes.FordTransitCustom_FTC_Interior_0.geometry}
                    material={materials.FTC_Interior}
                  />
                  <mesh
                    name='FordTransitCustom_FTC_Glass_0'
                    geometry={nodes.FordTransitCustom_FTC_Glass_0.geometry}
                    material={materials.FTC_Glass}
                  />
                </group>
                <group name='LR_WHEEL' position={[107.1, 43.08, -186.03]} rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh
                    name='LR_WHEEL_FTC_Wheels_0'
                    geometry={nodes.LR_WHEEL_FTC_Wheels_0.geometry}
                    material={materials.FTC_Wheels}
                  />
                </group>
                <group name='RR_WHEEL' position={[-107.1, 43.08, -186.03]} rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh
                    name='RR_WHEEL_FTC_Wheels_0'
                    geometry={nodes.RR_WHEEL_FTC_Wheels_0.geometry}
                    material={materials.FTC_Wheels}
                  />
                </group>
                <group name='Asientos' position={[50.78, 157.22, 65.26]} rotation={[-Math.PI / 2, 0, 0]}>
                  <group name='Object_53' position={[0.05, 11.52, -80.05]}>
                    <mesh
                      name='Asientos_FTC_Interior_0'
                      geometry={nodes.Asientos_FTC_Interior_0.geometry}
                      material={materials.FTC_Interior}
                    />
                    <mesh
                      name='Asientos_FTC_Lights_0'
                      geometry={nodes.Asientos_FTC_Lights_0.geometry}
                      material={materials.FTC_Lights}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('https://cdn.sanity.io/files/60rx43mw/production/07e153efc4e50a9b3c98e25028888fc087c58e48.glb')
