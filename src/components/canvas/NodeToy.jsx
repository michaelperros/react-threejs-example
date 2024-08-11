import React from 'react'
import { extend, useFrame } from '@react-three/fiber'
import { forwardRef } from 'react'
import { NodeToyMaterial as ThreeNodeToyMaterial, NodeToyCullMode, NodeToyMaterialType } from '@nodetoy/three-nodetoy'

extend({ ThreeNodeToyMaterial })

const NodeToyMaterial = forwardRef((props, ref) => {
  // @ts-ignore
  return (
    <threeNodeToyMaterial
      ref={ref}
      url={props.url}
      data={props.data}
      parameters={props.parameters}
      toneMapped={props.toneMapped}
      flatShading={props.flatShading}
      transparent={props.transparent}
      cullMode={props.cullMode}
      verbose={props.verbose}
      polygonOffset={props.polygonOffset}
      polygonOffsetFactor={props.polygonOffsetFactor}
      depthTest={props.depthTest}
      depthWrite={props.depthTest}
      envMapIntensity={props.envMapIntensity}
      name={props.name}
    />
  )
})
NodeToyMaterial.displayName = 'NodeToyMaterial'
const NodeToyTick = () => {
  useFrame(() => {
    ThreeNodeToyMaterial.tick()
  })
  return <></>
}

const swapMaterial = (nodes, material, newMaterial) => {
  if (Array.isArray(nodes)) {
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i]
      if (node.isMesh && node.material === material) {
        node.material = newMaterial
      }
      if (node.children && node.children.length) {
        swapMaterial(node.children, material, newMaterial)
      }
    }
  } else {
    swapMaterial([nodes], material, newMaterial)
  }
}

export { NodeToyCullMode, NodeToyMaterialType, NodeToyMaterial, NodeToyTick, ThreeNodeToyMaterial, swapMaterial }
