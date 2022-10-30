import React, { useMemo, useRef } from "react";
import { useControls } from "leva";
import { useLoader, extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'


function MyText() {
  extend({ TextGeometry })
  const ref = useRef()
  const ref2 = useRef()
  const params = useControls('mainText', {
    size: 2,
    height: 0.15,
    bevelEnabled: true,
    bevelThickness: 0.2,
    bevelSize: 0.15,
    bevelOffset: 0,
    bevelSegments: 3,
    curveSegments: 2,
    wireframe: false,
    flatShading: true,
  })
  const params2 = useControls('subheading', {
    size: 0.5,
    height: 0.05,
    bevelEnabled: true,
    bevelThickness: 0.04,
    bevelSize: 0.03,
    bevelOffset: 0,
    bevelSegments: 3,
    curveSegments: 10,
    color: '#5D75FF',
    wireframe: false,
    flatShading: false,
  })
  const font = useLoader(FontLoader, '/typefaces/inter.typeface.json')
  const config = useMemo(() => ({
    font,
    ...params,
  }), [font, params])
  const config2 = useMemo(() => ({
    font,
    ...params2
  }), [font, params2])
  return (
    <>
      <mesh ref={ref} position={[-3, 0, 0]}>
        <textGeometry args={['bloop', config]} />
        <meshNormalMaterial flatShading={params.flatShading} wireframe={params.wireframe} />
      </mesh>
      <mesh ref={ref2} position={[-3, -1, 0]}>
        <textGeometry args={['Coming soon...', config2]} />
        <meshStandardMaterial flatShading={params2.flatShading} wireframe={params2.wireframe} color={params2.color} />
      </mesh>
    </>
  )
}

export default MyText;
