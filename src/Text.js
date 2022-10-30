import React, { useMemo, useRef } from "react";
import { useControls } from "leva";
import { useLoader, extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'

extend({ TextGeometry })

function MyText() {
  const ref = useRef()
  const ref2 = useRef()
  const params = useControls({
    size: 2,
    height: 0.15,
    bevelEnabled: true,
    bevelThickness: 0.2,
    bevelSize: 0.15,
    bevelOffset: 0,
    bevelSegments: 3,
    curveSegments: 2,
    size2: 0.5,
    height2: 0.05,
    bevelEnabled2: true,
    bevelThickness2: 0.04,
    bevelSize2: 0.03,
    bevelOffset2: 0,
    bevelSegments2: 3,
    curveSegments2: 10,
    color2: '#5D75FF',
    wireframe2: true,
  })
  const font = useLoader(FontLoader, '/typefaces/inter.typeface.json')
  const config = useMemo(() => ({
    font,
    ...params,
  }), [font, params])
  const config2 = useMemo(() => ({
    font,
    size: params.size2,
    height: params.height2,
    bevelEnabled: params.bevelEnabled2,
    bevelThickness: params.bevelThickness2,
    bevelSize: params.bevelSize2,
    bevelOffset: params.bevelOffset2,
    bevelSegments: params.bevelSegments2,
    curveSegments: params.curveSegments2,
  }), [font, params])
  return (
    <>
      <mesh ref={ref} position={[-3, 0, 0]}>
        <textGeometry args={['bloop', config]} />
        <meshNormalMaterial flatShading />
      </mesh>
      <mesh ref={ref2} position={[-3, -1, 0]}>
        <textGeometry args={['Coming soon...', config2]} />
        <meshStandardMaterial wireframe={params.wireframe2} color={params.color2} />
      </mesh>
    </>
  )
}

export default MyText;
