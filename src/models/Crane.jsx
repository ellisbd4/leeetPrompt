/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: gaoran0623 (https://sketchfab.com/gaoran0623)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/origami-crane-d97d46a86470442ab5b8d64bace35b5b
Title: Origami Crane
*/



import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { a } from '@react-spring/three'

import origamiScene from '../assets/3d/origami_crane.glb'

const Crane = (props) => {
    const craneRef = useRef();

  const { nodes, materials } = useGLTF(origamiScene)
  return (
    <a.group ref={craneRef} {...props}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.223}>
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials['Material.002']}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </a.group>
  )
}

export default Crane;